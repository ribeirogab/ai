import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { TRANSPORT_TYPE_SCHEMA } from '@repo/definitions';
import { z, type ZodRawShape } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

type Execute<Args extends ZodRawShape> = (
  request: Args,
) => Promise<{ content: { type: string; text: string }[] }>;

type Tool<Args extends ZodRawShape = ZodRawShape> = {
  description: string | undefined;
  execute: Execute<Args>;
  parameters: Args;
  name: string;
};

export class McpServer {
  private readonly server: Server;
  private readonly tools: Tool<ZodRawShape>[] = [];

  constructor({ name, version }: { name: string; version?: string }) {
    this.server = new Server(
      { name, version: version ?? '1.0.0' },
      {
        capabilities: {
          tools: {},
        },
      },
    );
  }

  public tool<Args extends ZodRawShape>({
    description,
    parameters,
    execute,
    name,
  }: {
    description?: string;
    parameters: Args;
    execute: Execute<Args>;
    name: string;
  }) {
    this.tools.push({
      execute: execute as Execute<ZodRawShape>,
      description,
      parameters,
      name,
    });
  }

  public async start(dto: { transportType: string }) {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: this.tools.map((tool) => ({
          inputSchema: zodToJsonSchema(z.object(tool.parameters)),
          description: tool.description,
          name: tool.name,
        })),
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      for (const tool of this.tools) {
        if (tool.name === request.params.name) {
          return await tool.execute(request.params.arguments as ZodRawShape);
        }
      }

      throw new Error('Tool not found');
    });

    const transportType = TRANSPORT_TYPE_SCHEMA.parse(dto.transportType);

    if (transportType === 'stdio') {
      return this.startStdio();
    }

    throw new Error(`Unknown transport type: ${transportType}`);
  }

  private async startStdio() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

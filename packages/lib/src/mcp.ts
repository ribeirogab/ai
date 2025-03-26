import {
  McpServer as McpServerInternal,
  type ToolCallback,
} from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { TRANSPORT_TYPE_SCHEMA } from '@repo/definitions';
import fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import type { ZodRawShape } from 'zod';

export class McpServer {
  private readonly server: McpServerInternal;

  constructor({ name, version }: { name: string; version?: string }) {
    this.server = new McpServerInternal({ name, version: version ?? '1.0.0' });
  }

  public tool<Args extends ZodRawShape>({
    parameters,
    execute,
    name,
  }: {
    name: string;
    parameters: Args;
    execute: ToolCallback<Args>;
  }) {
    this.server.tool(name, parameters, execute);
  }

  public async start(dto: { transportType: string }) {
    const transportType = TRANSPORT_TYPE_SCHEMA.parse(dto.transportType);

    if (transportType === 'stdio') {
      return this.startStdio();
    }

    if (transportType === 'sse') {
      return this.startSse();
    }

    throw new Error(`Unknown transport type: ${transportType}`);
  }

  private async startStdio() {
    console.log('Starting MCP Server with stdio transport...');
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.log('MCP Server running with stdio transport');
  }

  private async startSse() {
    console.log('Starting MCP Server with SSE transport...');

    const app = fastify();
    let transport: SSEServerTransport | null = null;

    app.get('/sse', async (_: FastifyRequest, reply: FastifyReply) => {
      transport = new SSEServerTransport('/messages', reply.raw);
      await this.server.connect(transport);
    });

    app.post(
      '/messages',
      async (request: FastifyRequest, reply: FastifyReply) => {
        if (transport) {
          await transport.handlePostMessage(request.raw, reply.raw);
        }
      },
    );

    app.listen({ port: 8765, host: '0.0.0.0' }, () => {
      console.log('MCP Server running with SSE on http://localhost:8765/sse');
    });
  }
}

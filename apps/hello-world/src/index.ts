import { McpServer } from '@repo/lib/mcp';
import { z } from '@repo/lib/zod';

const server = new McpServer({
  name: 'hello-world',
  version: '1.0.0',
});

server.tool({
  name: 'hello-world',
  parameters: {
    name: z.string().describe('The name is required'),
  },
  execute: async ({ name }) => {
    return {
      content: [{ type: 'text', text: `Hello, ${name}!` }],
    };
  },
});

server.start({
  transportType: process.argv[2] ?? 'stdio',
});

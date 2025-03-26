import { McpServer } from '@repo/lib/mcp';
import { z } from '@repo/lib/zod';

const server = new McpServer({
  name: 'hello-world',
  version: '1.0.0',
});

server.tool({
  name: 'hello-world',
  parameters: {},
  execute: async () => {
    return {
      content: [{ type: 'text', text: 'Hello world!' }],
    };
  },
});

server.tool({
  name: 'greet',
  parameters: {
    name: z.string().describe('The name is required'),
  },
  execute: async ({ name }) => {
    return {
      content: [{ type: 'text', text: `Hello, ${name}! Nice to meet you.` }],
    };
  },
});

server.tool({
  name: 'farewell',
  parameters: {
    name: z.string().describe('The name is required'),
  },
  execute: async ({ name }) => {
    return {
      content: [{ type: 'text', text: `Goodbye, ${name}! Have a nice day.` }],
    };
  },
});

server.tool({
  name: 'clock',
  parameters: {},
  execute: async () => {
    const date = new Date();

    return {
      content: [
        {
          type: 'text',
          text: `Today is day ${date.getDate()}, ${date.getHours()}${
            date.getHours() === 11 ? 'pm' : 'am'
          }`,
        },
      ],
    };
  },
});

server.start({
  transportType: process.argv[2] ?? 'stdio',
});

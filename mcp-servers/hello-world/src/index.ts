import { McpServer } from 'simple-mcp';

import { container } from './container';

const { tools } = container();

const server = new McpServer({
  name: 'hello-world',
  version: '1.0.0',
});

server.tool(tools['hello-world']);
server.tool(tools.greet);
server.tool(tools.farewell);
server.tool(tools.clock);

server.start({
  transportType: process.argv[2] ?? 'stdio',
});

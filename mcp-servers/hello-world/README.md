# Hello World MCP Server

## Overview

The Hello World server is a simple example implementation of a Model Context Protocol (MCP) server. It demonstrates how to create and register tools that can be used by AI models through the MCP protocol.

## Features

This server includes several example tools:

- **HelloWorldTool**: Returns a simple "Hello world!" message with no parameters
- **GreetTool**: Greets a user by name, requiring a name parameter
- **FarewellTool**: Says goodbye to a user, requiring a name parameter
- **ClockTool**: Returns the current time with no parameters

## Project Structure

```markdown
hello-world/
u251cu2500u2500 src/                # Source code
u2502   u251cu2500u2500 tools/          # Tool implementations
u2502   u2502   u251cu2500u2500 clock.tool.ts     # Clock tool implementation
u2502   u2502   u251cu2500u2500 farewell.tool.ts  # Farewell tool implementation
u2502   u2502   u251cu2500u2500 greet.tool.ts     # Greet tool implementation
u2502   u2502   u251cu2500u2500 hello-world.tool.ts # Hello World tool implementation
u2502   u2502   u2514u2500u2500 index.ts          # Tool exports
u2502   u251cu2500u2500 container.ts     # Tool registration and dependency injection
u2502   u2514u2500u2500 index.ts         # Server entry point
u251cu2500u2500 vitest.config.mjs  # Test configuration
u2514u2500u2500 vitest.workspace.mjs # Test workspace configuration
```

## Getting Started

### Installation

```bash
# From the repository root
npm install

# Or from the hello-world directory
cd mcp-servers/hello-world
npm install
```

### Running the Server

```bash
# Build the server
npm run build

# Run the server
node build/index.js
```

### Testing

```bash
# Run all tests
npm run test

# Run only unit tests
npm run test:unit

# Run tests with coverage
npm run test:coverage
```

## Tool Examples

### HelloWorldTool

A simple tool that returns "Hello world!" with no parameters:

```typescript
import type { McpTool } from '@repo/definitions';

export class HelloWorldTool implements McpTool {
  public readonly parameters = {};
  public readonly name = 'hello-world';

  public async execute() {
    return {
      content: [{ type: 'text', text: 'Hello world!' }],
    };
  }
}
```

### GreetTool

A tool that greets a user by name:

```typescript
import type { McpTool } from '@repo/definitions';
import { z } from 'zod';

const PARAMETERS = z.object({
  name: z.string().describe('The name is required'),
});

export class GreetTool implements McpTool<typeof PARAMETERS.shape> {
  public readonly parameters = PARAMETERS.shape;
  public readonly name = 'greet';

  public async execute({ name }: z.infer<typeof PARAMETERS>) {
    return {
      content: [{ type: 'text', text: `Hello, ${name}! Nice to meet you.` }],
    };
  }
}

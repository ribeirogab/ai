# MCP Servers (Model Context Protocol)

## Overview

The MCP Servers directory contains implementations of servers that follow the Model Context Protocol. These servers enable AI models to interact with various tools and services through a standardized interface.

## What is the Model Context Protocol?

The Model Context Protocol (MCP) is a standardized way for AI models to discover and interact with tools. It allows for:

- Tool discovery: AI models can query available tools and their capabilities
- Tool invocation: AI models can call tools with structured inputs and receive structured outputs
- Standardized communication: A consistent protocol for tool-model interaction

## Directory Structure

```bash
mcp-servers/
├── hello-world/       # Example server with basic tools
│   ├── src/            # Source code
│   │   ├── tools/      # Tool implementations
│   │   ├── container.ts # Tool registration
│   │   └── index.ts     # Server entry point
│   ├── vitest.config.mjs       # Test configuration
│   └── vitest.workspace.mjs    # Test workspace configuration
```

## Available Servers

### Hello World Server

A simple example server that demonstrates the basic functionality of the MCP framework. It includes several example tools:

- **HelloWorldTool**: Returns a simple "Hello world!" message
- **GreetTool**: Greets a user by name
- **FarewellTool**: Says goodbye to a user
- **ClockTool**: Returns the current time

[Learn more about the Hello World Server](./hello-world/README.md)

## Creating a New Server

To create a new MCP server:

1. Create a new directory in the `mcp-servers` folder
2. Set up the basic structure following the hello-world example
3. Define your tools in the `src/tools` directory
4. Register your tools in the `container.ts` file
5. Configure the server in the `index.ts` file

## Running a Server

```bash
# Navigate to the server directory
cd mcp-servers/hello-world

# Install dependencies (if not using workspace)
npm install

# Build the server
npm run build

# Run the server
node build/index.js
```

## Testing

Servers include comprehensive test suites using Vitest:

```bash
# Run all tests
npm run test

# Run only unit tests
npm run test:unit

# Run tests with coverage
npm run test:coverage
```

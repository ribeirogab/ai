# AI - Artificial Intelligence Toolkit

## Overview

This repository contains a collection of tools, servers, and utilities related to Artificial Intelligence. It's organized as a monorepo using Turborepo, allowing for the development and management of multiple AI-related projects in a single repository.

## Project Structure

```markdown
ai/
├── mcp-servers/       # Model Context Protocol servers
│   └── hello-world/   # Example MCP server with basic tools
├── packages/          # Shared libraries and configurations
│   ├── definitions/   # Core type definitions and interfaces
│   ├── eslint-config/ # Shared ESLint configuration
│   ├── lib/           # Core libraries
│   ├── tsconfig/      # Shared TypeScript configuration
│   └── vitest/        # Test configuration and utilities
```

## Documentation

- [MCP Servers Documentation](./mcp-servers/README.md) - Details about the Model Context Protocol servers
  - [Hello World Server](./mcp-servers/hello-world/README.md) - Example MCP server implementation
- [Packages Documentation](./packages/README.md) - Information about shared libraries and configurations

## Current Projects

### MCP Servers

The Model Context Protocol (MCP) servers provide a standardized way to define, register, and execute tools that can be used by AI models. These servers communicate using the Model Context Protocol, enabling AI models to interact with various tools and services.

[Learn more about MCP Servers](./mcp-servers/README.md)

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm 10.7.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/ribeirogab/ai.git
cd ai

# Install dependencies
npm install
```

### Development

```bash
# Build all packages
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

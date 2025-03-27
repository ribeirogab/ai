# Packages

## Overview

The packages directory contains shared libraries, utilities, and configurations used across the AI repository. These packages provide core functionality, type definitions, and development tools to ensure consistency and code reuse across projects.

## Directory Structure

```markdown
packages/
├── definitions/   # Core type definitions and interfaces
├── eslint-config/ # Shared ESLint configuration
├── lib/           # Core libraries
├── tsconfig/      # Shared TypeScript configuration
└── vitest/        # Test configuration and utilities
```

## Package Descriptions

### definitions

Contains core type definitions and interfaces used across the repository. This includes:

1. **McpTool**: Interface for defining tools that can be used by AI models
2. **McpTransportType**: Types for different transport mechanisms

### eslint-config

Provides shared ESLint configurations to ensure consistent code style and quality across all projects in the repository.

### lib

Contains core libraries and utilities:

1. **MCP Server**: Implementation of the Model Context Protocol server
2. **Utility functions**: Shared helper functions

### tsconfig

Shared TypeScript configurations to ensure consistent TypeScript settings across all projects.

### vitest

Test configuration and utilities for Vitest, including:

1. **vitest.config.mjs**: Base configuration for Vitest
2. **vitest.workspace.mjs**: Workspace configuration for different test types (unit, integration)

## Using Packages

These packages are designed to be used within the monorepo. To use a package in another project within the repository:

1. Add the package as a dependency in your project's `package.json`:

```json
{
  "dependencies": {
    "@repo/definitions": "*",
    "@repo/lib": "*"
  },
  "devDependencies": {
    "@repo/eslint-config": "*",
    "@repo/tsconfig": "*",
    "@repo/vitest": "*"
  }
}
```

2. Import and use the package in your code:

```typescript
import { McpServer } from '@repo/lib/mcp';
import type { McpTool } from '@repo/definitions';
```

## Development

When making changes to a package, remember that it may affect multiple projects. Always run tests across the entire repository after making changes:

```bash
# Build all packages
npm run build

# Run tests
npm run test

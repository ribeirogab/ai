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

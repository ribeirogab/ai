import type { McpTool } from '@repo/definitions';

export class ClockTool implements McpTool {
  public readonly parameters = {};
  public readonly name = 'clock';

  public async execute() {
    const date = new Date();

    return {
      content: [
        {
          type: 'text',
          text: `Today is day ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        },
      ],
    };
  }
}

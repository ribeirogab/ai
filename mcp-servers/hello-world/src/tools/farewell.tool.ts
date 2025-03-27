import type { McpTool } from 'simple-mcp';
import { z } from 'zod';

const PARAMETERS = z.object({
  name: z.string().describe('The name is required'),
});

export class FarewellTool implements McpTool<typeof PARAMETERS.shape> {
  public readonly parameters = PARAMETERS.shape;
  public readonly name = 'farewell';

  public async execute({ name }: z.infer<typeof PARAMETERS>) {
    return {
      content: [{ type: 'text', text: `Goodbye, ${name}! Have a nice day.` }],
    };
  }
}

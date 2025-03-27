import { ClockTool, FarewellTool, GreetTool, HelloWorldTool } from './tools';

export const container = () => {
  return {
    tools: {
      'hello-world': new HelloWorldTool(),
      greet: new GreetTool(),
      farewell: new FarewellTool(),
      clock: new ClockTool(),
    },
  };
};

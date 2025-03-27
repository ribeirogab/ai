import { z } from 'zod';

import { GreetTool } from './greet.tool';

type SutTypes = {
  sut: GreetTool;
};

const makeSut = (): SutTypes => {
  const sut = new GreetTool();
  return { sut };
};

describe('GreetTool', () => {
  it('should return greeting message with the provided name', async () => {
    // Arrange
    const { sut } = makeSut();
    const params = { name: 'John' };

    // Act
    const result = await sut.execute(params);

    // Assert
    expect(result).toEqual({
      content: [{ type: 'text', text: 'Hello, John! Nice to meet you.' }],
    });
  });

  it('should have correct name', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.name).toBe('greet');
  });

  it('should have correct parameters schema', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.parameters).toHaveProperty('name');
    // Check that parameters match the expected Zod schema shape
    const schema = z.object(sut.parameters);
    expect(() => schema.parse({ name: 'Test' })).not.toThrow();
    expect(() => schema.parse({})).toThrow();
  });
});

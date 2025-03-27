import { z } from 'zod';

import { FarewellTool } from './farewell.tool';

type SutTypes = {
  sut: FarewellTool;
};

const makeSut = (): SutTypes => {
  const sut = new FarewellTool();
  return { sut };
};

describe('FarewellTool', () => {
  it('should return farewell message with the provided name', async () => {
    // Arrange
    const { sut } = makeSut();
    const params = { name: 'John' };

    // Act
    const result = await sut.execute(params);

    // Assert
    expect(result).toEqual({
      content: [{ type: 'text', text: 'Goodbye, John! Have a nice day.' }],
    });
  });

  it('should have correct name', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.name).toBe('farewell');
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

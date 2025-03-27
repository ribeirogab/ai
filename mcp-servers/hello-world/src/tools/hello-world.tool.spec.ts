import { HelloWorldTool } from './hello-world.tool';

type SutTypes = {
  sut: HelloWorldTool;
};

const makeSut = (): SutTypes => {
  const sut = new HelloWorldTool();
  return { sut };
};

describe('HelloWorldTool', () => {
  it('should return "Hello world!" message', async () => {
    // Arrange
    const { sut } = makeSut();

    // Act
    const result = await sut.execute();

    // Assert
    expect(result).toEqual({
      content: [{ type: 'text', text: 'Hello world!' }],
    });
  });

  it('should have correct name', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.name).toBe('hello-world');
  });

  it('should have empty parameters', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.parameters).toEqual({});
  });
});

import { ClockTool } from './clock.tool';

type SutTypes = {
  sut: ClockTool;
};

const makeSut = (): SutTypes => {
  const sut = new ClockTool();
  return { sut };
};

describe('ClockTool', () => {
  it('should return current date and time', async () => {
    // Arrange
    const { sut } = makeSut();
    const mockDate = new Date(2025, 2, 26, 14, 30); // March 26, 2025, 14:30
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    // Act
    const result = await sut.execute();

    // Assert
    expect(result).toEqual({
      content: [
        {
          type: 'text',
          text: `Today is day 26, 14:30`,
        },
      ],
    });

    // Cleanup
    vi.useRealTimers();
  });

  it('should have correct name', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.name).toBe('clock');
  });

  it('should have empty parameters', () => {
    // Arrange
    const { sut } = makeSut();

    // Assert
    expect(sut.parameters).toEqual({});
  });
});

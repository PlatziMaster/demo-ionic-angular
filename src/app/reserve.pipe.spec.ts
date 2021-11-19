import { ReservePipe } from './reserve.pipe';

describe('ReservePipe', () => {

  let pipe: ReservePipe;

  beforeEach(() => {
    pipe = new ReservePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return hello in reverse', () => {
    // Arrange
    const word = 'hello';
    // Act
    const rta = pipe.transform(word);
    // Assert
    expect(rta).toBe('olleh');
  });
});

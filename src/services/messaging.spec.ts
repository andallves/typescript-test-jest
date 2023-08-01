import { Messaging } from './messaging';

const createSut = () => new Messaging();
const msgMock = 'Testing message';

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage(msgMock)).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msgMock);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with msgMock', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msgMock);
    expect(consoleSpy).toHaveBeenCalledWith(msgMock);
  });
});

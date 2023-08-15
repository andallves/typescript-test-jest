import { Discount, TenPorcentDiscount, FiftyPorcentDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPorcentDiscount);
    expect(sut.calculate(11)).toBe(9.9);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPorcentDiscount);
    expect(sut.calculate(10)).toBe(5);
  });
});

import { Product } from './product';

const createSut = (name: string, price: number): Product =>
  new Product(name, price);

describe('Product', () => {
  it('should return a object', () => {
    // System under test
    const sut = createSut('Cup', 29.9);
    expect(sut).toHaveProperty('name', 'Cup');
    expect(sut.price).toBeCloseTo(29.9);
  });
});

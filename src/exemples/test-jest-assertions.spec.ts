describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // primitive values
    expect(number).toEqual(10); // objects values

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeLessThanOrEqual(11);
    expect(number).toBeGreaterThan(8);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with object', () => {
    const person = { name: 'Andre', age: 23 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 23);
    expect(person.name).toBe('Andre');
  });
});

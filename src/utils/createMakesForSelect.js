export const createMakesForSelect = makes =>
  makes.map(make => ({
    value: make.toLowerCase(),
    label: make,
  }));

export const createAddress = (data, value) => {
  const address = data.address.split(',').slice(1);

  return address[value];
};

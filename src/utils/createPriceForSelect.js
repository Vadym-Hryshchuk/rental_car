export const createPriceForSelect = adverts => {
  const getPrices = adverts.map(advert => Number(advert.rentalPrice.slice(1)));
  const getUniqueSortPrices = getPrices
    .sort((a, b) => a - b)
    .filter((value, index, array) => array.indexOf(value) === index);

  const pricesList = [];
  const minValue = Math.round(Math.min(...getUniqueSortPrices) / 10) * 10;

  const maxValue = Math.max(...getUniqueSortPrices);

  if (getPrices.length > 0) {
    for (let i = minValue; i <= maxValue; i += 10) {
      pricesList.push({ value: i, label: `$${i}` });
    }
  }

  return pricesList;
};

export const filterAdverts = (getedAdverts, filter = {}) => {
  if (Object.keys(filter).length === 0) {
    return getedAdverts;
  }

  const filterByMake =
    filter.selectedMake !== null && filter.selectedMake !== undefined
      ? getedAdverts.filter(value => value.make === filter.selectedMake.label)
      : getedAdverts;

  const filterByPrice =
    filter.selectedPrice !== null && filter.selectedPrice !== undefined
      ? filterByMake.filter(
          value =>
            Number(value.rentalPrice.slice(1)) <= filter.selectedPrice.value
        )
      : filterByMake;

  const filterByFromMileage =
    filter.selectFromMileage !== null && filter.selectFromMileage !== undefined
      ? filterByPrice.filter(
          value => Number(value.mileage) >= Number(filter.selectFromMileage)
        )
      : filterByPrice;

  const filterByToMileage =
    filter.selectToMileage !== null && filter.selectToMileage !== undefined
      ? filterByFromMileage.filter(
          value => Number(value.mileage) <= Number(filter.selectToMileage)
        )
      : filterByFromMileage;

  return filterByToMileage;
};

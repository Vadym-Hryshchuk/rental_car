export const filterAdverts = (getedAdverts, filter) => {
  if (
    filter.selectedMake !== null &&
    filter.selectedMake !== undefined &&
    filter.selectedPrice !== null &&
    filter.selectedPrice !== undefined &&
    filter.selectFromMileage !== '' &&
    filter.selectFromMileage !== undefined &&
    filter.selectToMileage !== '' &&
    filter.selectToMileage !== undefined
  ) {
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
    filter.selectFromMileage !== '' && filter.selectFromMileage !== undefined
      ? filterByPrice.filter(
          value => Number(value.mileage) >= Number(filter.selectFromMileage)
        )
      : filterByPrice;

  const filterByToMileage =
    filter.selectToMileage !== '' && filter.selectToMileage !== undefined
      ? filterByFromMileage.filter(
          value => Number(value.mileage) <= Number(filter.selectToMileage)
        )
      : filterByFromMileage;

  return filterByToMileage;
};

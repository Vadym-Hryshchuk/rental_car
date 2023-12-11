import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

import makes from 'makes.json';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { createMakesForSelect } from 'utils/createMakesForSelect';
import { createPriceForSelect } from 'utils/createPriceForSelect';

export const FilterForm = () => {
  const advertsStore = useSelector(selectAdverts);

  const defaultValues = {
    selectedMake: { value: '', label: '' },
    selectedPrice: { value: '', label: '' },
    selectFromMileage: '',
    selectToMileage: '',
  };
  const { handleSubmit, control } = useForm(defaultValues);

  const onSubmit = data => {
    console.log(data);
    // Обробляйте дані форми тут
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Car brand
        <Controller
          name="selectedMake"
          control={control}
          render={({ field }) => (
            <CreatableSelect
              isClearable
              {...field}
              options={createMakesForSelect(makes)}
            />
          )}
        />
      </label>
      <label>
        Price/ 1 hour
        <Controller
          name="selectedPrice"
          control={control}
          render={({ field }) => (
            <CreatableSelect
              isClearable
              {...field}
              options={createPriceForSelect(advertsStore)}
            />
          )}
        />
      </label>
      <fieldset>
        <legend>Range</legend>

        <label>From:</label>
        <Controller
          name="selectFromMileage"
          control={control}
          render={({ field }) => <input {...field} />}
        />

        <label>To:</label>
        <Controller
          name="selectToMileage"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import makes from 'makes.json';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { addFilters } from '../../redux/filters/filtersSlice';
import { createMakesForSelect } from 'utils/createMakesForSelect';
import { createPriceForSelect } from 'utils/createPriceForSelect';
import {
  CustomInputLeft,
  CustomInputRight,
  Fieldset,
  Form,
  FormWrapper,
  StyledSelect,
} from './FilterForm.styled';
import { SearchBtn } from 'components/button/SearchBtn/SearchBtn';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const advertsStore = useSelector(selectAdverts);

  const defaultValues = {
    selectedMake: null,
    selectedPrice: null,
    selectFromMileage: '',
    selectToMileage: '',
  };
  const { handleSubmit, control, reset } = useForm(defaultValues);

  const onSubmit = data => {
    dispatch(addFilters(data));

    reset(defaultValues);
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: '100%',
      height: '100%',
      background: '#f7f7fb',
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: '#121417',

      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '20px',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      width: '100%',
    }),
    option: baseStyles => ({
      ...baseStyles,
      color: 'rgba(18, 20, 23, 0.20)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '20px',
    }),
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Car brand
          <Controller
            name="selectedMake"
            control={control}
            render={({ field }) => (
              <StyledSelect
                isClearable
                placeholder="Enter the text"
                {...field}
                options={createMakesForSelect(makes)}
                styles={customStyles}
                width="224px"
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
              <StyledSelect
                isClearable
                placeholder="To $"
                {...field}
                options={createPriceForSelect(advertsStore)}
                styles={customStyles}
                width="125px"
              />
            )}
          />
        </label>

        <Fieldset>
          <legend>Сar mileage / km</legend>
          <label>
            <Controller
              name="selectFromMileage"
              control={control}
              render={({ field }) => (
                <CustomInputLeft
                  placeholder="From"
                  autoComplete="off"
                  {...field}
                  type="number"
                  value={field.value || ''}
                />
              )}
            />
          </label>

          <label>
            <Controller
              name="selectToMileage"
              control={control}
              render={({ field }) => (
                <CustomInputRight
                  placeholder="To"
                  autoComplete="off"
                  {...field}
                  type="number"
                  value={field.value || ''}
                />
              )}
            />
          </label>
        </Fieldset>
        <SearchBtn />
      </Form>
    </FormWrapper>
  );
};

// import CreatableSelect from 'react-select/creatable';
// import { Field, Form, Formik } from 'formik';
// export const FilterForm = () => {
//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(event.target.value);
//     // resetForm();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Car brand
//           <CreatableSelect name="car_brand" isClearable options={options} />
//         </label>
//         <label>
//           Price/ 1 hour
//           <CreatableSelect name="price" isClearable options={options} />
//         </label>

//         <button type="submit">Submit</button>
//       </form>

//     </>
//   );
// };
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

export const FilterForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      selectedOption: { value: '', label: '' }, // Задайте тут бажане значення
    },
  });

  const onSubmit = data => {
    console.log(data.selectedOption);
    // Обробляйте дані форми тут
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Select an option:</label>
      <Controller
        name="selectedOption"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

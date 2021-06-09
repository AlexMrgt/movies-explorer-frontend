import useFormWithValidation from '../../hooks/useForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchInput from '../SearchInput/SearchInput';

function SearchForm() {

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  return (
    <form
      noValidate
      className='search-form'
    >

      <SearchInput
        onChange={handleChange}
        value={values.search}
        error={errors.search}
      />

      <button
        className='search-form__submit-button'
        type='submit'
        disabled = {!isValid}
      />

      <FilterCheckbox
        captionText='Короткометражки'
      />

    </form >
  )
}

export default SearchForm;

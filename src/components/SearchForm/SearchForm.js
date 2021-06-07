import useFormWithValidation from '../../hooks/useForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchInput from '../SearchInput/SearchInput';

function SearchForm({
  onSearchMovie
}) {

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({});

  function handleSearchSubmit(evt) {

    evt.preventDefault();
    onSearchMovie(values);
    resetForm();
  }

  return (
    <form
      noValidate
      className='search-form'
      onSubmit={handleSearchSubmit}
    >

      <SearchInput
        onChange={handleChange}
        value={values.search}
        error={errors.search}
      />

      <button
        className='search-form__submit-button'
        type='submit'
        disabled={!isValid}
      />

      <FilterCheckbox
        value={values.amongShortMovies}
        onChange={handleChange}
      />

    </form >
  )
}

export default SearchForm;

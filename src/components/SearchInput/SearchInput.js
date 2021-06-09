
// function SearchInput({
//   onChange,
//   value,
//   error,
// }) {

//   return (
//     <>
//       <NewInput
//         wrapperClassName='search-form__input-container'
//         labelClassName='search-form__label'
//         id='search'
//         name='search'
//         inputClassName='search-form__input'
//         placeholder='Фильм'
//         inputType='text'
//         onChange={onChange}
//         value={value}
//         errorClassName='search-form__input-error'
//         error={error}
//       />
//     </>
//   )
// }
// export default SearchInput;

import Input from "../Input/Input";

function SearchInput({
  onChange,
  value,
  error,
}) {

  return (

    <div
      className='search-form__input-container'
    >

      <label
        className='search-form__label'
      >
        <Input
          id='search'
          name='search'
          inputClassName='search-form__input'
          inputType='text'
          placeholder= 'Фильм'
          onChange={onChange}
          value={value}
        />

      </label>

      <span
        id='search-error'
        className='search-form__input-error'
      >
        {error}
      </span>

    </div>
  )
}

export default SearchInput;


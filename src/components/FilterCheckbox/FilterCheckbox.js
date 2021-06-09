import { BUTTON_TEXT } from '../../utils/constants';

function FilterCheckbox({
  onChange,
  value,

}) {

  return (

    <div
      className='filter-checkbox'
    >
      <label
        className='filter-checkbox__label'
      >
        <input
          onChange={onChange}
          value={value}
          checked={value || false}
          name='amongShortMovies'
          className='filter-checkbox__input'
          type="checkbox"
        />
        <span
          className="filter-checkbox__slider"
        >
        </span>
      </label>
      <p
        className='filter-checkbox__caption'
      >
        {BUTTON_TEXT.shortFilmsFilter}
      </p>
    </div>
  )
}

export default FilterCheckbox;

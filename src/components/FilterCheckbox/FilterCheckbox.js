function FilterCheckbox({
  captionText
}) {


  return (

    <div
      className='filter-checkbox'
    >
      <label
        className='filter-checkbox__label'
      >
        <input
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
        {captionText}
      </p>
    </div>
  )
}

export default FilterCheckbox;

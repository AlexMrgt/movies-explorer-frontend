
function Input({
  id = '',
  name = '',
  inputClassName = '',
  inputType,
  minLength,
  maxLength,
  placeholder = '',
  onChange,
  value = '',
}) {

  return (

    <input
      id={id}
      name={name}
      className={inputClassName}
      type={inputType}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      autoComplete='off'
      onChange={onChange}
      value={value}
      required
    />

  )
}

export default Input;

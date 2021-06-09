
function Input({
  id = '',
  name = '',
  inputClassName = '',
  inputType,
  minLength,
  maxLength,
  pattern = '(.*?)',
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
      pattern = {pattern}
      placeholder={placeholder}
      autoComplete='off'
      onChange={onChange}
      value={value}
      required
    />

  )
}

export default Input;

import Input from "../Input/Input";

function AuthInput({
  wrapperClassName,
  labelClassName,
  labelText = '',
  id = '',
  name = '',
  inputClassName = '',
  inputType,
  minLength,
  maxLength,
  pattern,
  placeholder = '',
  onChange,
  value = '',
  errorClassName = '',
  error = ''
}) {

  return (

    <div
      className={wrapperClassName}>

      <label
        className={labelClassName}
      >
        {labelText}

        <Input
          id={id}
          name={name}
          inputClassName={inputClassName}
          inputType={inputType}
          minLength={minLength}
          maxLength={maxLength}
          pattern = {pattern}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />

      </label>

      <span
        id={`${id}-error`}
        className={errorClassName}
      >
        {error}
      </span>

    </div>
  )
}

export default AuthInput;

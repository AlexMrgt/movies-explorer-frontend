import Input from "../Input/Input";

function ProfileInput({
  wrapperClassName,
  labelClassName,
  labelText = '',
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
  errorClassName = '',
  bottomErrorClassName = '',
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

        <span
          id={`${id}-error`}
          className={errorClassName}
        >
          {error}
        </span>
      </label>

      <span
        id={`${id}-error`}
        className={bottomErrorClassName}
      >
        {error}
      </span>


    </div>
  )
}

export default ProfileInput;

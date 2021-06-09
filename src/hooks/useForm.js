import { useCallback, useState } from 'react';

export default function useFormWithValidation() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {

    const input = evt.target;
    const name = input.name;
    const value = input.value;
    const errorMessage = input.validationMessage;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    resetForm,
    errors,
    isValid
  };
}

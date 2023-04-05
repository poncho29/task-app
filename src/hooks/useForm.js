import { useState, useEffect, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
  const [formState, setFormState] = useState( initialForm );
  const [errors, setErrors] = useState({})

  useEffect(() => {
    createValidators();
  }, [formState])

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(errors)) {
      if (errors[formValue] !== null) return false;
    }

    return true;
  }, [errors])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  const createValidators = () => {
    const checkValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      checkValues[formField] = fn(formState[formField]) ? null : errorMessage;
    }

    setErrors(checkValues);
  }

  return {
    ...formState,
    ...errors,
    formState,
    errors,
    isFormValid,
    onInputChange,
    onResetForm,
  }
}
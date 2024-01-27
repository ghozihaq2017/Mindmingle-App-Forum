import { useState } from 'react';

function useFlexibleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(newValue) {
    if (newValue?.target?.nodeName === 'DIV') {
      setValue(newValue.target.innerHTML);
    } else if (typeof newValue === 'string' || typeof newValue === 'boolean') {
      setValue(newValue);
    } else {
      setValue(newValue.target.value);
    }
  }
  return [value, handleValueChange];
}

export default useFlexibleInput;

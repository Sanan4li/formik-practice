import React from "react";
import { inputTypes } from "./types";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { useFormikContext } from "formik";
import Select from "./Select";
import _ from "underscore";
import Error from "./Error";
import NumberInput from "./NumberInput";
import CheckBox from "./CheckBox";
import DateInput from "./DateInput";
import TextArea from "./TextArea";
const CustomInput = ({
  type = inputTypes.TEXT_INPUT,
  label,
  name,
  placeholder = "",
  options = [],
}) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const value = _.get(values, name); // getting value if its a nested object
  let inputComponent = {
    [inputTypes.TEXT_INPUT]: (
      <TextInput
        value={value}
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={handleChange(name)}
      />
    ),
    [inputTypes.NUMBER_INPUT]: (
      <NumberInput
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={handleChange(name)}
      />
    ),
    [inputTypes.DATE_INPUT]: (
      <DateInput
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={handleChange(name)}
      />
    ),
    [inputTypes.PASSWORD_INPUT]: (
      <PasswordInput
        value={value}
        label={label}
        name={name}
        onChange={handleChange(name)}
        placeholder={placeholder}
      />
    ),
    [inputTypes.TEXTAREA]: (
      <TextArea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange(name)}
        label={label}
      />
    ),
    [inputTypes.CHECKBOX_INPUT]: (
      <CheckBox label={label} onChange={handleChange(name)} value={value} />
    ),
    [inputTypes.SELECT]: (
      <Select
        placeholder={label}
        label={label}
        value={value}
        name={name}
        onChange={handleChange(name)}
        options={options}
      />
    ),
  }[type];
  return (
    <>
      {inputComponent}
      <Error visible={touched[name]} error={_.get(errors, name)} />
    </>
  );
};

export default CustomInput;

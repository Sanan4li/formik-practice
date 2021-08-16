import React from "react";
import { useFormikContext } from "formik";
const Input = ({ label, name, value, type }) => {
  const { values, touched, handleChange, errors } = useFormikContext();
  const { userName } = values;
  console.log(userName);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </>
  );
};

export default Input;

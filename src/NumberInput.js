import React from "react";

const NumberInput = ({ name, label, value, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} value={value} {...rest} />
    </div>
  );
};

export default NumberInput;

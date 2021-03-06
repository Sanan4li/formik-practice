import React from "react";

const DateInput = ({ name, label, value, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="date" name={name} id={name} value={value} {...rest} />
    </div>
  );
};

export default DateInput;

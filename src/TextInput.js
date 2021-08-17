import React from "react";

const TextInput = ({ name, label, value, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" value={value} name={name} id={name} {...rest} />
    </div>
  );
};

export default TextInput;

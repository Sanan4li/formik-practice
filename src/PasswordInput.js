import React from "react";

const PasswordInput = ({ name, label, value, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="password" name={name} id="name" {...rest} />
    </div>
  );
};

export default PasswordInput;

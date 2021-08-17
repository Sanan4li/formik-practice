import React from "react";

const TextArea = ({ name, label, value, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <textarea name={name} id={name} value={value} {...rest} />
    </div>
  );
};

export default TextArea;

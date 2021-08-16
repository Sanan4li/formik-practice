import React from "react";

const TextArea = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <textarea name={name} id={name} {...rest} />
    </div>
  );
};

export default TextArea;

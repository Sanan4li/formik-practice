import React from "react";

const CheckBox = ({ name, label, value, onChange, ...rest }) => {
  const handleChange = (event) => {
    event.target.value = event.target.checked;
    onChange(event);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleChange}
        name={name}
        id={name}
        value={value}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
export default CheckBox;

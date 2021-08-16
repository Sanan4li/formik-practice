import React from "react";

const RadioButton = ({ name, labels, title, onChange, ...rest }) => {
  const handleChange = (event) => {
    event.target.value = event.target.checked;
    onChange(event);
  };
  return (
    <>
      <div>
        {labels.map((label, index) => {
          return (
            <div key={`radio_button_${index}`}>
              <input
                type="radio"
                className="mb-2 "
                value={label.value}
                onChange={handleChange}
                name={title}
                id={label.value}
                {...rest}
              />
              <label htmlFor={label.value}>{label.title}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RadioButton;

import React from "react";
import { useFormikContext } from "formik";
const SubmitButton = ({ name, value }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <button type="submit" name={name} onClick={handleSubmit}>
        {value}
      </button>
    </>
  );
};

export default SubmitButton;

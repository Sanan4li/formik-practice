import React from "react";
import { Formik } from "formik";
import { inputTypes } from "./types";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";
import { signInInitialValues, signInValidationSchema } from "./Schema";
const Practice = () => {
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={signInInitialValues}
        validationSchema={signInValidationSchema}
        onSubmit={submitHandler}
      >
        <div>
          <CustomInput label="User Name" name="userName" />
          <CustomInput
            label="Password"
            name="password"
            type={inputTypes.PASSWORD_INPUT}
          />
          <CustomInput label="Age" name="age" type={inputTypes.NUMBER_INPUT} />
          <CustomInput
            label="Select Gender"
            name="gender"
            type={inputTypes.SELECT}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <CustomInput
            type={inputTypes.DATE_INPUT}
            label="Date of Birth"
            name="dob"
          />
          <CustomInput
            type={inputTypes.CHECKBOX_INPUT}
            name="active"
            label="Active"
          />
          <CustomInput
            type={inputTypes.TEXTAREA}
            name="comments"
            label="Comments"
          />
          <SubmitButton value="Sign In" name="signInButton" />
        </div>
      </Formik>
    </div>
  );
};

export default Practice;

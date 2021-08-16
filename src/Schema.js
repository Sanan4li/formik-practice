import * as Yup from "yup";
export const signInInitialValues = {
  userName: "",
  password: "",
  gender: "",
  age: "",
  dob: "",
  comments: "",
};
export const signInValidationSchema = Yup.object().shape({
  userName: Yup.string().required().label("User Name"),
  password: Yup.string().required().label("Password"),
  gender: Yup.string().required().label("Gender"),
  age: Yup.number().required().label("Age").typeError("Age must be a number!"),
  dob: Yup.string().required().label("Date of Birth"),
  comments: Yup.string().required().label("Comments"),
});

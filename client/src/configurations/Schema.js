import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const signupValidations = Yup.object().shape({
  username: Yup.string()
  .min(5,"Username too short! it must be between 5 and 16 characters")
  .max(16,"Username Too long! it must be between 5 and 16 characters")
  .required("Username Required"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Email Required!"),
  password: Yup.string()
  .min(5, "Password is Too Short! it must be between 5 and 16 characters")
  .max(16, "Password is Too Long! it must be between 5 and 16 characters")
  .required("Password Required"),
  conformPassword: Yup.string()
  .min(5, "Password is Too Short! it must be between 5 and 16 characters")
  .max(16, "Password is Too Long! it must be between 5 and 16 characters")
  .required("Conform Password Required"),
  
});
const loginValidations = Yup.object().shape({
  username: Yup.string()
  .min(5,"Username Too short!")
  .max(16,"Username Too long!")
  .required("Username Required"),
  
  password: Yup.string()
  .min(5, "Password is Too Short!")
  .max(16, "Password is Too Long!")
  .required("Password Required"),
});
export {loginValidations, signupValidations};
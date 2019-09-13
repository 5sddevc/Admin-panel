import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name Too Short!")
    .max(50, "First Name Too Long!")
    .required("First Name Required"),
  lastName: Yup.string()
    .min(2, "Last Name Too Short!")
    .max(50, "Last Name Too Long!")
    .required("Last Name Required!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Email Required!"),
  username: Yup.string()
  .min(5,"Username Too short!")
  .max(16,"Username Too long!")
  .required("Email Required"),
  password: Yup.string()
  .min(5, "Password is Too Short!")
  .max(16, "Password is Too Long!")
  .required("Password Required"),
  
});
export default Schema;
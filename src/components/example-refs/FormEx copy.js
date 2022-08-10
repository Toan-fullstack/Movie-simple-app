import React from "react";
import { Formik, useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "less than 20 character";
  }
  return errors;
};

const FormEx = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col mx-auto">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your firstname"
          className="p-4 rounded-sm border-2 border-gray-200"
          {...formik.getFieldProps("firstName")}
        />
        {formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white rounded-md mt-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormEx;

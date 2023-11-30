import React from "react";
import { useFormik } from "formik";

// Pass the useFormik() hook initial form values and a submit function that will
// be called when the form is submitted

// Note that we have to initialize ALL of fields with values. These
// could come from props, but since we don’t want to prefill this form,
// we just use an empty string. If we don’t do this, React will yell
// at us.

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LogIn = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form style={{ margin: "30px" }} onSubmit={formik.handleSubmit}>
      <div style={{ display: "grid", width: "300px", padding: "5px" }}>
        <label style={{ fontSize: "20px", margin: "1px" }} htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
      <div style={{ display: "grid", width: "300px", padding: "5px" }}>
        <label style={{ fontSize: "20px", margin: "1px" }} htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </div>
      <div style={{ display: "grid", width: "300px", padding: "5px" }}>
        <label style={{ fontSize: "20px", margin: "1px" }} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <button
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "royalBlue",
          color: "white",
          margin: "5px",
          fontSize: "15px",
          fontFamily: "sans-serif",
        }}
        type="submit"
      >
        <b>Submit</b>
      </button>
    </form>
  );
};

export default LogIn;

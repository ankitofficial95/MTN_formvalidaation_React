import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ setRegister }) => {
  const [userName, setUserName] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    const storedData = JSON.parse(localStorage.getItem("registrations")) || [];
    const foundUser = storedData.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (foundUser) {
      console.log("Login successful");
      setUserName(foundUser.name);
    } else {
      console.log(" failed login");
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="button-container">
              <button className="btn btn-primary" type="submit">
                Login
              </button>

              <button
                className="btn btn-primary"
                type="button"
                onClick={setRegister}
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="registrationSuccess">
        {userName && (
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Login Successfull !</h4>
            <p>welcome {userName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

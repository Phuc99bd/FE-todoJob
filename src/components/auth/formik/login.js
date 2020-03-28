import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Alert, FormLabel } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().min(1, "Vui lòng không bỏ trống password")
});

export const LoginFormik = ({loading,submitForm,showError}) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          let { email ,password} = values;
          submitForm(email,password); 
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <FormLabel>Email address</FormLabel>
              <Field name="email" type="email" className="form-control" placeholder="Enter email" />
              {errors.email && touched.email ? (
                <div class="text-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
             <FormLabel>Password</FormLabel>
              <Field type="password" name="password" className="form-control" placeholder="Password" />
              {errors.firstName && touched.firstName ? (
                <div class="text-danger">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
                {showError()}
            </div>
            <div className="form-group">
              <Button variant="primary" type="submit">
                {loading()}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

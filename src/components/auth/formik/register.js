import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormLabel } from "react-bootstrap";
import { Link} from "react-router-dom"

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3,"Full name tối thiểu 3 kí tự")
    .required('Required'),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(2, "Vui lòng không bỏ trống password")
    .required('Required')
});

export const RegisterFormik = ({loading,submitForm,showError,showSuccess}) => {
  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          let {fullname, email ,password} = values;
          submitForm(fullname,email,password); 
        }}
      >
        {({ errors, touched }) => (
          <Form>
                <div className="form-group">
              <FormLabel>Fullname</FormLabel>
              <Field name="fullname" type="text" className="form-control" placeholder="Enter fullname" />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.fullname}</div>
              ) : null}
            </div>
            <div className="form-group">
              <FormLabel>Email address</FormLabel>
              <Field name="email" type="email" className="form-control" placeholder="Enter email" />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
             <FormLabel>Password</FormLabel>
              <Field type="password" name="password" className="form-control" placeholder="Password" />
              {errors.password && touched.password ? (
                <div className="text-danger">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
                {showError()}
            </div>
            <div className="form-group">
                {showSuccess()}
            </div>
            <div className="form-group">
                <Link to="/login">If you have account,Please Login</Link>
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

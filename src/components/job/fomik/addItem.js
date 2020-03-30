import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Alert, FormLabel } from "react-bootstrap";

const addJobSchema = Yup.object().shape({
  nameJob: Yup.string()
    .min(2,"Vui lòng không bỏ trống nameJob.")
    .required("Required")
});

export const AddFormik = ({submitForm,changeSTT}) => {
  return (
    <div>
      <Formik
        initialValues={{
            nameJob: "",
            active: true
        }}
        validationSchema={addJobSchema}
        onSubmit={values => {
          let { nameJob ,active} = values;
          submitForm(nameJob,active); 
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Alert variant="primary">Tên công việc </Alert>
              <Field name="nameJob" type="text" className="form-control" placeholder="Enter nameJob" />
              {errors.nameJob && touched.nameJob ? (
                <div className="text-danger">{errors.nameJob}</div>
              ) : null}
            </div>
            <div className="form-group">
             <FormLabel>Trạng thái</FormLabel>
              <Field as="select" name="active" className="form-control">
                 <option value={true}>Kích hoạt</option>
                 <option value={false}>Ẩn</option>
              </Field>
           
            </div>
            <div className="form-group">
              <Button variant="danger" type="button" className="form-control" onClick={()=>changeSTT()}>
                 X
              </Button>
            </div>
            <div className="form-group">
              <Button variant="primary" type="submit" className="form-control">
                Thêm mới
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          addContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="number">Number</label>
            <Field name="number" />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}

            <button className={s.contactFormBtn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

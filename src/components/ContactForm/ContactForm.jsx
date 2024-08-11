import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  number: Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Number must be exactly 10 digits"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off" className={css.contact_form}>
        <label className={css.contact_input}>
          <Field
            type="text"
            name="name"        
            title="Please enter your name"
          />
          <ErrorMessage name="name" />
        </label>
        <label className={css.label}>
          Number:
          <Field
            className={css.field}
            type="tel"
            name="number"
            title="Please enter your phone number"
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

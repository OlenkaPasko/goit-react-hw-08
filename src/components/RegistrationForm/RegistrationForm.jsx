import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form_register} autoComplete="off">
          <label className={css.label_form}>
            Username
            <Field type="text" name="name" />
          </label>
          <label className={css.label_form}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label_form}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
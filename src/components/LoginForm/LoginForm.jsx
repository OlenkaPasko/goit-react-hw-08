import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css"

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" className={css.label} />
        </label>
        <label>
          Password
          <Field type="password" name="password" className={css.label} />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

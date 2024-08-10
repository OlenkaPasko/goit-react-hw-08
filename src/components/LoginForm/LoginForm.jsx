import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    form.reset();
  };

  return (
    <Formik onSubmit={handleSubmit}>
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

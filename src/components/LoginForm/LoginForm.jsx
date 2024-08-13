import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірний формат email")
    .required("Обов'язково для заповнення"),
  password: Yup.string()
    .min(6, "Пароль повинен містити щонайменше 6 символів")
    .required("Обов'язково для заповнення"),
});
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

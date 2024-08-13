import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css"

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <PageTitle className={css.form_title}>Registration</PageTitle>
      <RegistrationForm />
    </div>
  );
}

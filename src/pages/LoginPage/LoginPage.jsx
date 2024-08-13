import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div className={css.container}>
      <PageTitle className={css.login_title}>Log in</PageTitle>
      <LoginForm />
    </div>
  );
}

import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import phone from "../../ImgBg/phone.jpg"
export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <PageTitle className={css.title}>
          Welcome to PhoneBook!{" "}
          <img src={phone} alt="Phone book" className={css.backgroundImage} />
        </PageTitle>
      </div>
    </>
  );
}

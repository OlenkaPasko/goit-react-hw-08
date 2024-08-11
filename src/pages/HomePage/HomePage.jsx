import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <>
      <title>Home</title>

      <div className={css.container}>
        <h1 className={css.title}>
          Task manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}

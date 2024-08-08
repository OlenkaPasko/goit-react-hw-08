import css from "./Contact.module.css";

export default function Contact({ name, number, onDeleteContact }) {
  return (
    <div>
      <div>
        <p>
          {name}: {number}
        </p>
      </div>
      <div>
        <button type="button" onClick={onDeleteContact} className={css.button}>
          Delete
        </button>
      </div>
    </div>
  );
}

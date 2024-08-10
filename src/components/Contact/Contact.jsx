import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ id, text }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <button type="button" onClick={handleDelete} className={css.button}>
          Delete
        </button>
      </div>
    </div>
  );
}

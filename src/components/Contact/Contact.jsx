import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ name, number, contactId }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contactId));

  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <button type="button" onClick={handleDelete} className={css.button}>
          Delete
        </button>
      </div>
    </div>
  );
}

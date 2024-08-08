import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact
            name={item.name}
            number={item.number}
            onDeleteContact={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

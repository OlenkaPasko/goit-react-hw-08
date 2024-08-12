import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList () {

const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
};


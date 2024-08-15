import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectContacts, selectError } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
console.log("Contacts:", contacts);
  return (
    <>
      <div className={css.container}>
        <PageTitle className={css.contact_title}>Your contacts</PageTitle>
        <ContactForm />
        {isLoading && !error && <b>Loading...</b>}
        {error && <div>Error: {error}</div>}
        <ContactList contacts={contacts} />
        <SearchBox />
      </div>
    </>
  );
}

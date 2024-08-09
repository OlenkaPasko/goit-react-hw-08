import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/filters/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your tasks</title>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}

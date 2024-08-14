import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css"

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        {" "}
        <PageTitle className={css.contact_title}>Your contacts</PageTitle>
        <ContactForm />
        <div>{isLoading && "Request in progress..."}</div>
        <ContactList />
      </div>
    </>
  );
}

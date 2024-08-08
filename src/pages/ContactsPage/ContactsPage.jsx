import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { fetchTasks } from "../../redux/tasks/operations";
import { selectLoading } from "../../redux/tasks/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
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

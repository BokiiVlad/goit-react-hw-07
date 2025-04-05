import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const task = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactsList}>
      {task.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}

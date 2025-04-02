import { BsTelephoneFill, BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const hundleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.listItem}>
      <div>
        <div className={css.firstField}>
          <BsPersonFill size="22" />
          <p className={css.listText}>{name}</p>
        </div>
        <div className={css.listField}>
          <BsTelephoneFill size="18" />
          <p className={css.listText}>{number}</p>
        </div>
      </div>
      <button onClick={hundleClick} className={css.contBut}>
        Delete
      </button>
    </li>
  );
}

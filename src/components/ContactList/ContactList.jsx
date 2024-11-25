import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filter = useSelector((state) => state.filters.name); /* текущий фильтр*/

  /*фильтр с помощью селектора*/
  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state, filter)
  );

  return (
    <ul className={css.listPhone}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

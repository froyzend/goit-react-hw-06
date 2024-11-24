import { useSelector } from "react-redux";
import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const setFilters = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  /*Делаем фильтр по имени*/
  const filteredContacts = setFilters(contacts, filter);

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

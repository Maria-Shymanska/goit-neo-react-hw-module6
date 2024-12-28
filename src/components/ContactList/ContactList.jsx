import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { contactsArr, deleteContact } from "../../redux/contactsSlice";
import { filterValue } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsArr);
  const filter = useSelector(filterValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactitem} key={id}>
            <Contact
              key={id}
              id={id}
              name={name}
              phone={number}
              deleteContacts={(contactId) => {
                dispatch(deleteContact(contactId));
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
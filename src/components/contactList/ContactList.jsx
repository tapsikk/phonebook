import { useSelector } from 'react-redux';
import style from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ deleteContacts }) => {
  const contacts = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={style.ulContact}>
      {filteredContacts.map(item => (
        <Contact
          key={item.id} 
          searchContact={item}
          handleClickDelete={deleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;

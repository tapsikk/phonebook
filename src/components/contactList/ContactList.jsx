import { selectFilteredContacts } from '../../redux/contactsSlice';
import style from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from 'react-redux';

const ContactList = ({ deleteContacts }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

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

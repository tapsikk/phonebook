import style from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ searchContact, deleteContacts }) => {
  return (
    <ul className={style.ulContact}>
      {searchContact.map(item => (
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

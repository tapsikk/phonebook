import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  removeContact,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectFilterName, setNameFilter } from "../../redux/filtersSlice";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";

function HomePage() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const filterName = useSelector(selectFilterName);
  const dispatch = useDispatch();

  const addContacts = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = (contactId) => {
    dispatch(removeContact(contactId));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(filteredContacts));
  }, [filteredContacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox value={filterName} onFilter={(value) => dispatch(setNameFilter(value))} />
      {filteredContacts.length !== 0 ? (
        <ContactList
          searchContact={filteredContacts} // Передаем filteredContacts вместо searchContact
          deleteContacts={deleteContacts}
        />
      ) : filterName.trim() !== "" ? (
        <p style={{ textAlign: "center" }}>Not found!</p>
      ) : null}
    </>
  );
}

export default HomePage;

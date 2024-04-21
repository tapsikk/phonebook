import { useEffect, useState } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    {
      return savedContacts ? JSON.parse(savedContacts) : [];
    }
  });

  const [search, setSearch] = useState("");

  const searchContact = contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContacts = (newContact) => {
    setContacts((prevСontacts) => {
      return [...prevСontacts, newContact];
    });
  };

  const deleteContacts = (idContact) => {
    setContacts((prevСontacts) => {
      return prevСontacts.filter((contact) => contact.id !== idContact);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
            <h1>Phonebook</h1>
            <ContactForm addContacts={addContacts} />
            <SearchBox value={search} onFilter={setSearch} />
            {searchContact.length !== 0 ? (
              <ContactList
                searchContact={searchContact}
                deleteContacts={deleteContacts}
              />
            ) : (
              search.trim() !== '' ? <p style={{textAlign: 'center'}}>Not found!</p> : null
            )}
    </>
  );
}

export default App;

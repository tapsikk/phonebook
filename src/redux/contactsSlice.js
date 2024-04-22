import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectFilterName } from "./filtersSlice.js";

const getInitialContactsState = () => {
  const savedContacts = window.localStorage.getItem("saved-contacts");
  return savedContacts ? JSON.parse(savedContacts) : [];
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: getInitialContactsState() },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectFilterName,
  (contacts, nameFilter) => {
    if (!nameFilter) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsSlice from "./contactsSlice"
import filtersSlice from "./filtersSlice"

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);
const persistedFiltersReducer = persistReducer(filtersPersistConfig, filtersSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer
  }
});

export const persistor = persistStore(store);

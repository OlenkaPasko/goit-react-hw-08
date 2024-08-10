import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

// Функція-селектор для використання в useSelector
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

// Мемоїззація селектора для фільтрації контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

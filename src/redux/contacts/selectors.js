
// Функція-селектор для використання в useSelector
export const selectContacts = (store) => store.contacts.items;
export const selectLoading = (store) => store.contacts.isLoading;
export const selectError = (store) => store.contacts.error;

// Мемоїззація селектора для фільтрації контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, (store) => store.filters.name],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

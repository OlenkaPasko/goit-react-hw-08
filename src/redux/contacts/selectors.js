
//export const selectContacts = (store) => store.contacts.items;

//export const selectIsLoading = (store) => store.contacts.isLoading;
//export const selectError = (store) => store.contacts.error;

// Функція-селектор для використання в useSelector
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

// Мемоїззація селектора для фільтрації контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

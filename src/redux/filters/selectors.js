export const selectLoading = (state) => state.tasks.loading;

export const selectFilter = (state) => state.tasks.filter;

export const selectAllTasks = (state) => state.tasks.items;

// Функція-селектор для використання в useSelector
export const selectNameFilter = (state) => state.filters.name;

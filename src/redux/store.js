import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
  reduser: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
  },
});
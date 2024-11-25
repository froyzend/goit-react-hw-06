import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

/* Настраиваем persist только для contacts */
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Сохраняем только items
};

/* Оборачиваем contactsReducer в persistReducer */
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

/* Создаем store */
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Персистируем только contacts
    filters: filtersReducer, // Передаем filters напрямую
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* Экспортируем persistor для redux-persist */
export const persistor = persistStore(store);

/* Экспортируем store */
export default store;

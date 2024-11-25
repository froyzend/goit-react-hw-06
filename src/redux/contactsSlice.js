import { createSlice } from "@reduxjs/toolkit";
/*base state*/
const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

/* Селектор для получения списка контактов */
export const selectContacts = (state) => state.contacts.items;

/* Селектор для фильтрованных контактов */
export const selectFilteredContacts = (state, filter) =>
  state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

/* Экспортируем экшены и редюсер */
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

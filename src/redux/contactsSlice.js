import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Додаємо новий контакт
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      // Фільтруємо масив контактів напряму
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

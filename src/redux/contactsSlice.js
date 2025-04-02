import { createSlice } from "@reduxjs/toolkit"
import contactsArr from "../contactsArr";

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [...contactsArr]
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload)
        }
    }



})
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
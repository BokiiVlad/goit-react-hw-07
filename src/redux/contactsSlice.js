import { createSelector, createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "../redux/contactsOps"
import { selectNameFilter } from "./filtersSlice";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (task, filterValue) => {
    return task.filter((contact) => {
        return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    })
})


const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            []
            state.loading = true;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.loading = true;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload)
        }).addCase(addContact.rejected, (state) => {
            state.error = true;
            state.loading = false;
        }).addCase(deleteContact.pending, (state) => {
            state.loading = true;
        }).addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter((el) => el.id !== action.payload.id)
            state.loading = false;
        })

    }
})

export default contactSlice.reducer;
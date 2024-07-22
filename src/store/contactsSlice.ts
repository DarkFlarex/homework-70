import {Contact} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {createContact, deleteContact, fetchContacts} from "./contactsThunks";


interface ContactsState {
    items: Contact[];
    fetchLoading: boolean;
    deleteLoading: false | string;
    createLoading: boolean;

}

const initialState: ContactsState = {
    items:[],
    fetchLoading: false,
    deleteLoading: false,
    createLoading: false,
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload: items }) => {
                state.fetchLoading = false;
                state.items = items;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.fetchLoading = false;
            });

        builder
            .addCase(createContact.pending, (state) => {
                state.createLoading = true;
            })
            .addCase(createContact.fulfilled, (state) => {
                state.createLoading = false;
            })
            .addCase(createContact.rejected, (state) => {
                state.createLoading = false;
            });

        builder
            .addCase(deleteContact.pending, (state, { meta: { arg: contactId } }) => {
                state.deleteLoading = contactId;
            })
            .addCase(deleteContact.fulfilled, (state) => {
                state.deleteLoading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.deleteLoading = false;
            });
    },
    selectors:{
        selectContacts:(state)=>state.items,
        selectFetchContactsLoading:(state)=>state.fetchLoading,
        selectDeleteContentLoading:(state)=>state.deleteLoading,
        selectCreateContactLoading:(state)=>state.createLoading,
    },
});

export const  contactsReducer = contactsSlice.reducer;

export const {
    selectContacts,
    selectFetchContactsLoading,
    selectDeleteContentLoading,
    selectCreateContactLoading,
}= contactsSlice.selectors;
import { Contact, ApiContact } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    deleteContact,
    createContact,
    fetchOneContact,
    updateContact,
} from './contactsThunks';

export interface ContactsState {
    items: Contact[];
    fetchLoading: boolean;
    deleteLoading: false | string;
    createLoading: boolean;
    updateLoading: boolean;
    fetchOneLoading: boolean;
    oneContact: null | ApiContact;
}

const initialState: ContactsState = {
    items: [],
    fetchLoading: false,
    deleteLoading: false,
    createLoading: false,
    updateLoading: false,
    fetchOneLoading: false,
    oneContact: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
            .addCase(deleteContact.pending, (state, { meta: { arg: contactId } }) => {
                state.deleteLoading = contactId;
            })
            .addCase(deleteContact.fulfilled, (state) => {
                state.deleteLoading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.deleteLoading = false;
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
            .addCase(fetchOneContact.pending, (state) => {
                state.oneContact = null;
                state.fetchOneLoading = true;
            })
            .addCase(fetchOneContact.fulfilled, (state, { payload: contact }) => {
                state.oneContact = contact;
                state.fetchOneLoading = false;
            })
            .addCase(fetchOneContact.rejected, (state) => {
                state.fetchOneLoading = false;
            });

        builder
            .addCase(updateContact.pending, (state) => {
                state.updateLoading = true;
            })
            .addCase(updateContact.fulfilled, (state) => {
                state.updateLoading = false;
            })
            .addCase(updateContact.rejected, (state) => {
                state.updateLoading = false;
            });
    },
    selectors: {
        selectContacts: (state: ContactsState) => state.items,
        selectFetchContactsLoading: (state: ContactsState) => state.fetchLoading,
        selectDeleteContactLoading: (state: ContactsState) => state.deleteLoading,
        selectCreateContactLoading: (state: ContactsState) => state.createLoading,
        selectFetchOneContactLoading: (state: ContactsState) => state.fetchOneLoading,
        selectUpdateContactLoading: (state: ContactsState) => state.updateLoading,
        selectOneContact: (state: ContactsState) => state.oneContact,
    },
});

export const contactsReducer = contactsSlice.reducer;

export const {
    selectContacts,
    selectFetchContactsLoading,
    selectDeleteContactLoading,
    selectCreateContactLoading,
    selectFetchOneContactLoading,
    selectUpdateContactLoading,
    selectOneContact,
} = contactsSlice.selectors;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiContact, ApiContacts, Contact } from '../types';
import axiosApi from '../axiosApi';

export const fetchContacts = createAsyncThunk<Contact[]>(
    'contacts/fetchContacts',
    async () => {
        const contactsResponse = await axiosApi.get<ApiContacts | null>('/contacts.json');
        const contacts = contactsResponse.data;

        let newContacts: Contact[] = [];

        if (contacts) {
            newContacts = Object.keys(contacts).map((key: string) => {
                const contact = contacts[key];
                return {
                    id: key,
                    ...contact,
                };
            });
        }
        return newContacts;
    }
);

export const deleteContact = createAsyncThunk<void, string>(
    'contacts/deleteContact',
    async (ContactId) => {
        await axiosApi.delete('/contacts/' + ContactId + '.json');
    },
);

export const createContact = createAsyncThunk<void, ApiContact>(
    'contacts/create',
    async (apiContact) => {
        await axiosApi.post('/contacts.json', apiContact);
    },
);

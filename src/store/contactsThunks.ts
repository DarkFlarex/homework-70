import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiContact, ApiContacts, Contact } from '../types';
import axiosApi from '../axiosApi';
import {RootState} from "../app/store";

export const fetchContacts = createAsyncThunk<Contact[], void, { state: RootState }>(
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

export const deleteContact = createAsyncThunk<void, string, { state: RootState }>(
    'contacts/deleteContact',
    async (ContactId) => {
        await axiosApi.delete('/contacts/' + ContactId + '.json');
    },
);

export const createContact = createAsyncThunk<void, ApiContact, { state: RootState }>(
    'contacts/create',
    async (apiContact) => {
        await axiosApi.post('/contacts.json', apiContact);
    },
);

export const fetchOneContact = createAsyncThunk<ApiContact, string, { state: RootState }>(
    'contacts/fetchOne',
    async (id) => {
        const { data: contact } = await axiosApi.get<ApiContact | null>(
            `/contacts/${id}.json`,
        );

        if (contact === null) {
            throw new Error('Not found');
        }
        return contact;
    },
);

export interface UpdateContactArg {
    id: string;
    apiContact: ApiContact;
}

export const updateContact = createAsyncThunk<void, UpdateContactArg, { state: RootState }>(
    'contacts/update',
    async ({ id, apiContact }) => {
        await axiosApi.put(`/contacts/${id}.json`, apiContact);
    },
);
import {Contact} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {createContact} from "./contactsThunks";


interface ContactsState {
    items: Contact[];
    createLoading: boolean;
}

const initialState: ContactsState = {
    items:[],
    createLoading: false,
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
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
    },
    selectors:{
        selectCreateContactLoading:(state)=>state.createLoading,
    },
});

export const  contactsReducer = contactsSlice.reducer;

export const {
    selectCreateContactLoading,
}= contactsSlice.selectors;
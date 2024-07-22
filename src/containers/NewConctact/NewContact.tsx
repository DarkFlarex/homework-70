import React from 'react';
import {ApiContact} from '../../types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ContactForm from "../../compontents/ContactForm/ContactForm";
import {selectCreateContactLoading} from "../../store/contactsSlice";
import {createContact} from "../../store/contactsThunks";

const NewContact: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectCreateContactLoading);

    const onSubmit = async (contact: ApiContact) => {
        try {
            await dispatch(createContact(contact)).unwrap();
            navigate('/');
            toast.success('Contact created');
        } catch (error) {
            toast.error('Could not create contact!');
        }
    };

    return (
        <div className="row mt-2">
            <div className="col">
                <ContactForm onSubmit={onSubmit} isLoading={isCreating} />
            </div>
        </div>
    );
};

export default NewContact;

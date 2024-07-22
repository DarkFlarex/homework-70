import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ModalItem from './ModalItem';
import { selectDeleteContentLoading } from '../../store/contactsSlice';
import {deleteContact, fetchContacts} from '../../store/contactsThunks';
import Spinner from '../Spinner/Spinner';
import { Contact } from '../../types';

interface Props {
    show: boolean;
    contact: Contact;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({
    show,
    contact,
    onClose,
}) => {
    const dispatch = useAppDispatch();
    const deleteLoading = useAppSelector(selectDeleteContentLoading);

    const removeContact = async (id: string) => {
        await dispatch(deleteContact(id));
        await dispatch(fetchContacts());
        onClose();
    };

    return (
        <>
            <div
                className="modal-backdrop show"
                style={{ display: show ? 'block' : 'none' }}
            />
            <div
                className="modal show"
                style={{ display: show ? 'block' : 'none' }}
                onClick={onClose}
            >
                <div className="modal-dialog">
                        {contact ? (
                            <ModalItem
                                contact={contact}
                                onClose={onClose}
                                onDelete={() => removeContact(contact.id)}
                                deleteLoading={deleteLoading}
                            />
                        ) : (
                            <Spinner />
                        )}
                </div>
            </div>
        </>
    );
};

export default Modal;

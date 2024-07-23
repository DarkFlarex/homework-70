import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchContacts } from '../../store/contactsThunks';
import { selectContacts, selectFetchContactsLoading } from '../../store/contactsSlice';
import ContactListItem from './ContactListItem';
import Spinner from '../Spinner/Spinner';
import { Contact } from '../../types';
import Modal from '../Modal/Modal';

const ContactList: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const dispatch = useAppDispatch();
    const contacts = useAppSelector(selectContacts);
    const contactsLoading = useAppSelector(selectFetchContactsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    return (
        <>
            {selectedContact && (
                <Modal
                    show={showModal}
                    contact={selectedContact}
                    onClose={() => setShowModal(false)}
                />
            )}
            {contactsLoading ? (
                <Spinner />
            ) : contacts.length > 0 ? (
                contacts.map((contact) => (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}
                        onClick={() => handleContactClick(contact)}
                    />
                ))
            ) : (
                <h5>Контакты пусты, заполните их</h5>
            )}
        </>
    );
};

export default ContactList;

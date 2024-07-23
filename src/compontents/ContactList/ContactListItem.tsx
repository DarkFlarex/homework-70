import React from 'react';
import { Contact } from "../../types";
import './ContactList.css';

interface ContactListItemProps {
    contact: Contact;
    onClick: () => void;
}

const ContactListItem: React.FC<ContactListItemProps> = ({ contact, onClick }) => {
    return (
        <div className="card mb-3 p-3 col-5 border border-secondary" onClick={onClick}>
            <div className="d-flex align-items-center">
                <div
                    className="contact-img me-5"
                    style={{
                        background: `url(${contact.image}) no-repeat center center / cover`,
                        width: '100px',
                        height: '100px'
                    }}
                />
                <div className="contact-info">
                    <h5>{contact.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default ContactListItem;

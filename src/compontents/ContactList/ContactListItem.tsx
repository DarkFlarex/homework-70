import React from 'react';
import { Contact } from "../../types";

interface ContactListItemProps {
    contact: Contact;
    onClick: () => void;
}

const ContactListItem: React.FC<ContactListItemProps> = ({ contact, onClick }) => {
    return (
        <div className="card mb-3" onClick={onClick}>
            <div
                className="contact-img"
                style={{ background: `url(${contact.image}) no-repeat center center / cover`, width: '100px', height: '100px' }}
            />
            <div className="contact-info">
                <h5>{contact.name}</h5>
                <span>{contact.phone}</span>
            </div>
        </div>
    );
};

export default ContactListItem;

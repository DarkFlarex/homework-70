import React from 'react';
import { Contact } from "../../types";
import { NavLink } from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import phoneImage from '../../assets/phone.png';
import emailImage from '../../assets/email.png';

interface Props {
    contact: Contact;
    onClose: React.MouseEventHandler;
    onDelete: VoidFunction;
    deleteLoading: false | string;
}

const ModalItem: React.FC<Props> = ({
    contact,
    onClose,
    onDelete,
    deleteLoading,
}) => {
    const imageStyle = {
        background: `url(${contact.image}) no-repeat center center / cover`,
        width: '150px',
        height: '150px',
    };

    const phoneImageStyle = {
        width: '20px',
        height: '20px',
        marginRight: '8px',
    };

    const emailImageStyle = {
        width: '20px',
        height: '20px',
        marginRight: '8px',
    };

    return (
        <>
            <div className="modal-content p-4"
                 onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header d-flex justify-content-end p-0">
                    <NavLink className="btn-close" to="/" onClick={onClose}/>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-between p-0 px-1 mb-4">
                    <div style={imageStyle} />
                    <div className="d-flex flex-column align-items-start">
                        <h5 className="mb-3">{contact.name}</h5>
                        <div className="d-flex align-items-center mb-3">
                            <img src={phoneImage} alt="Phone Icon" style={phoneImageStyle}/>
                            <span>{contact.phone}</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={emailImage} alt="Phone Icon" style={emailImageStyle}/>
                            <span>{contact.email}</span>
                        </div>
                    </div>
                </div>
                <div className="modal-buttons d-flex justify-content-around">
                    <NavLink className="btn btn-primary px-5 py-2" to={`/edit-contact/${contact.id}`}>
                        Edit
                    </NavLink>
                    <button
                        className="btn btn-danger px-5 py-2"
                        onClick={onDelete}
                        disabled={deleteLoading === contact.id}
                    >
                        {deleteLoading === contact.id && <ButtonSpinner />}
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalItem;

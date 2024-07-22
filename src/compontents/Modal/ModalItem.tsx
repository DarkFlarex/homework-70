import React from 'react';
import { Contact } from "../../types";
import { NavLink } from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";

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
    deleteLoading }) =>
{
    const imageStyle = {
        background: `url(${contact.image}) no-repeat center center / cover`,
        width: '150px',
        height: '150px',
    };

    return (
        <>
            <div className="modal-content p-5"
                 onClick={(e) => e.stopPropagation()}
            >
                <NavLink className="text-end" to="/" onClick={onClose}>
                    Exit
                </NavLink>
                <div className="modal-body d-flex align-items-center justify-content-between p-0 ps-1 pe-1">
                    <div className="col-sm-4 rounded-start" style={imageStyle} />
                    <div className="d-flex flex-column align-items-center">
                        <h5>{contact.name}</h5>
                        <span>{contact.phone}</span>
                        <span>{contact.email}</span>
                    </div>
                </div>
                <div className="modal-buttons">
                    <NavLink className="text-end" to={`/edit-contact/${contact.id}`}>
                        Edit
                    </NavLink>
                    <button
                        className="btn btn-danger"
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

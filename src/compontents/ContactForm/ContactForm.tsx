import {ApiContact, ContactMutation} from "../../types";
import React, {useState} from "react";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {NavLink} from "react-router-dom";

interface Props {
    onSubmit: (contact: ApiContact) => void;
    existingContact?: ApiContact;
    isLoading?: boolean;
}

const initialState: ContactMutation = {
    name: '',
    phone: '',
    email: '',
    image: '',
};

const ContactForm:React.FC<Props> = ({
    onSubmit,
    existingContact,
    isLoading,
}) => {
    const [contactMutation, setContactMutation] = useState<ContactMutation>(initialState);
    const imageStyle = {
        background: `url(${contactMutation.image}) no-repeat center center / cover`,
        width: '100px',
        height: '100px',
    };


    const changeDish = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setContactMutation((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSubmit({
            ...contactMutation,
        });
    };

    return (
        <form onSubmit={onFormSubmit} className="col-5">
            <h4 className="mb-4">{existingContact ? 'Edit contact' : 'Add new contact'}</h4>
            <div className="form-group d-flex align-items-center mb-3">
                <label className="col-2" htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-control"
                    onChange={changeDish}
                    value={contactMutation.name}
                />
            </div>
            <div className="form-group d-flex align-items-center mb-3">
                <label className="col-2" htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    className="form-control"
                    onChange={changeDish}
                    value={contactMutation.phone}
                />
            </div>
            <div className="form-group d-flex align-items-center mb-3">
                <label className="col-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                    onChange={changeDish}
                    value={contactMutation.email}
                />
            </div>
            <div className="form-group d-flex align-items-center mb-3">
                <label className="col-2" htmlFor="image">Photo</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    required
                    className="form-control"
                    onChange={changeDish}
                    value={contactMutation.image}
                />
            </div>
            <div className="form-group d-flex align-items-top mb-3">
                <label className="col-3">Photo Preview</label>
                <div
                    className="col-sm-4 rounded-start border rounded-2"
                    style={imageStyle}
                />
            </div>
            <div className="buttons">
                <button
                    type="submit"
                    className="btn btn-primary mt-2 me-5"
                        disabled={isLoading}
                    >
                        {isLoading && <ButtonSpinner/>}
                        {existingContact ? 'Update' : 'Save'}
                    </button>
                    <NavLink
                        to="/"
                        className="btn btn-primary mt-2"
                    >
                        Back to Contacts
                    </NavLink>
                </div>
        </form>
    );
};

export default ContactForm;
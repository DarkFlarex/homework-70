import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark py-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    Contacts
                </NavLink>
                <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                    <li className="nav-item">
                        <NavLink to="/new-contact" className="btn bg-secondary text-white">
                            Add new contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;

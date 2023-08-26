import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const HelpLayout: React.FC = () => {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quod.</p>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default HelpLayout;

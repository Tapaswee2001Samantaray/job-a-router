import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const RootLayout: React.FC = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
                <Breadcrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
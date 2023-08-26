import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div>
            <h2>Page Not Found.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nesciunt sapiente earum porro inventore enim a, sunt expedita mollitia natus eum ex ad ducimus nisi rerum omnis non. Magni, quae.</p>
            <p>Go to <Link to="/">HomePage</Link>.</p>
        </div>
    );
};

export default NotFound;
 
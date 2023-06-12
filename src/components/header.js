import React from 'react';
import Nav from './nav';
function Header() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <h1>Header</h1>
            <Nav />

        </div>
    );
}

export default Header;
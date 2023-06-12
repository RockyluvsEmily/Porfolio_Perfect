import React from 'react';
import Project from './project';
function Portfolio() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <Project />

        </div>
    );
}

export default Portfolio;
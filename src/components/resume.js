import React from 'react';

function Resume() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <div className="my-2">
                <p>
                    Check out my <a href="/googledoc/resumepath">resume</a>
                    Or download here <a href="/relative/path/to/pdf" download>download</a>
                </p>
                <h3>Front-end Proficiencies</h3>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>

        </div>
    );
}

export default Resume;
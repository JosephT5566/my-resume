import React from 'react';
import image1 from 'assets/images/image1.jpg';

import './expertise.scss';

const expertise = () => {
    return (
        <div id="expertiseContainer">
            <div className="content">
                <div className="section">
                    <h1>language</h1>
                    <div className="list">
                        <li>C</li>
                        <li>C#</li>
                        <li>Linux shell script</li>
                        <li>SQL (MySQL / SQL anywhere)</li>
                        <li>PHP</li>
                        <li>JavaScript / jQuery / AJAX</li>
                    </div>
                </div>
                <div className="section">
                    <h1>Tools & environment</h1>
                    <div className="list">
                        <li>Visual Studio Code</li>
                        <li>Git</li>
                        <li>.Net Framework</li>
                        <li>React.js</li>
                        <li>PHP</li>
                        <li>Ceedling</li>
                        <li>Qt</li>
                    </div>
                </div>
                <div className="section">
                    <div className="list">
                        <h1>OS</h1>
                        <li>Windows</li>
                        <li>Linux</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default expertise;

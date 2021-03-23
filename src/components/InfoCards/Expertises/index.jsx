import React from 'react';

import './expertise.scss';

const Expertise = () => {
    return (
        <div id="expertiseContainer">
                <h1>專長</h1>
            <div className="content">
                <div className="section">
                    <h2>語言</h2>
                    <div className="list">
                        <p>JavaScript</p>
                        <p>Golang</p>
                        <p>SQL (Postgre / MySQL / SQL anywhere)</p>
                        <p>PHP</p>
                        <p>C</p>
                        <p>C#</p>
                        <p>Shell script</p>
                    </div>
                </div>
                <div className="section">
                    <h2>工具與環境</h2>
                    <div className="list">
                        <p>React</p>
                        <p>Git</p>
                        <p>Docker</p>
                        <p>PHP</p>
                        <p>Google cloud platform</p>
                        <p>Visual Studio Code</p>
                        <p>.Net Framework</p>
                        <p>Ceedling</p>
                        <p>Qt</p>
                    </div>
                </div>
                <div className="section">
                    <div className="list">
                        <h2>作業系統</h2>
                        <p>Windows</p>
                        <p>Linux</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;

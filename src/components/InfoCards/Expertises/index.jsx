import React from 'react';

import './expertise.scss';

const Expertise = () => {
    return (
        <div id="expertiseContainer">
                <h1>專長</h1>
            <div className="content">
                <div className="section">
                    <h2>擅長語言</h2>
                    <div className="list">
                        <p>C</p>
                        <p>C#</p>
                        <p>Linux shell script</p>
                        <p>SQL (MySQL / SQL anywhere)</p>
                        <p>PHP</p>
                        <p>JavaScript / jQuery / AJAX</p>
                    </div>
                </div>
                <div className="section">
                    <h2>使用工具與環境</h2>
                    <div className="list">
                        <p>Visual Studio Code</p>
                        <p>Git</p>
                        <p>.Net Framework</p>
                        <p>React.js</p>
                        <p>PHP</p>
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

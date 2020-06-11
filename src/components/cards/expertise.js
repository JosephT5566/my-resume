import './expertise.css';
import image1 from '../../assets/images/image1.jpg';

import React from 'react';

const expertise = () => {
    return (
        <div id="expertiseContainer">
            <div className="comment">
                <div className="content expertise">
                    <h1>language</h1>
                    <li>C</li>
                    <li>C#</li>
                    <li>Linux shell script</li>
                    <li>SQL (MySQL / SQL anywhere)</li>
                    <li>PHP</li>
                    <li>JavaScript / jQuery / AJAX</li>
                </div>
                <div className="content">
                    <h1>Tools & environment</h1>
                    <li>Visual Studio Code</li>
                    <li>Git</li>
                    <li>.Net Framework</li>
                    <li>React.js</li>
                    <li>Ceedling</li>
                    <li>Qt</li>
                </div>
                <div className="content">
                    <h1>OS</h1>
                    <li>Windows</li>
                    <li>Linux</li>
                </div>
                <div className="content skill" style={{ width: '25%' }}>
                    <h1>技能</h1>
                    <hr />
                    <li>影像處理演算法設計與應用</li>
                    <li>C#應用程式設計</li>
                    <li>網頁前端設計</li>
                    <li>資料庫管理與應用</li>
                </div>
                {/* <img style={ {width: '33%'} } src={image1} alt="image1"/> */}
            </div>
        </div>
    );
};

export default expertise;

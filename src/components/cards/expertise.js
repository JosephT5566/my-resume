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
                <div className="content interest">
                    <h1>Tools & environment</h1>
                    <li>.Net Framework</li>
                    <li>React.js</li>
                    <li>Ceedling</li>
                    <li>Qt</li>
                </div>
                <div className="content interest">
                    <h1>OS</h1>
                    <li>Windows</li>
                    <li>Linux</li>
                </div>
                <div className="content interest">
                    <h1>興趣</h1>
                    <p>
                        <i className="minus icon"></i>旅遊
                    </p>
                    <p>
                        <i className="minus icon"></i>攝影
                    </p>
                    <p>
                        <i className="minus icon"></i>滑雪
                    </p>
                    <p>
                        <i className="minus icon"></i>潛水
                        <span style={{color: 'SILVER', fontSize: '12px'}}> OW / AOW</span>
                    </p>
                    <p>
                        <i className="minus icon"></i>健身
                    </p>
                </div>
                {/* <img style={ {width: '33%'} } src={image1} alt="image1"/> */}
            </div>
        </div>
    );
};

export default expertise;

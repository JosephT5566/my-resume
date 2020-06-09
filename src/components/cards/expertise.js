import './expertise.css';
import image1 from '../../assets/images/image1.jpg';

import React from 'react';

const expertise = () => {
    return (
        <div id="expertiseContainer">
            <div className="comment">
                <div className="content expertise">
                    <h2>專長</h2>
                    <p>
                        <i className="minus icon"></i>C#/C++
                    </p>
                    <p>
                        <i className="minus icon"></i>PHP
                    </p>
                    <p>
                        <i className="minus icon"></i>JavaScript / jQuery / AJAX
                    </p>
                    <p>
                        <i className="minus icon"></i>React.js
                    </p>
                </div>
                <div className="content interest">
                    <h2>興趣</h2>
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
                <img style={ {width: '33%'} } src={image1} alt="image1"/>
            </div>
        </div>
    );
};

export default expertise;

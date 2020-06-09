import './personalInfo.css'

import React from 'react';

import personalShot from '../../assets/images/personal_shot.jpg';

const personalInfo = (props) => {
    return (
        <div className="comment">
            <img src={personalShot} alt="personal photo" style={{width: "50%"}}/>
            <div className="content">
                <h1>曾俊霖</h1>
                <hr/>
                <p>1992/03/04</p>
                <p>新竹縣竹北市</p>
                <p>zxp930110@hotmail.com.tw</p>
                <p>0928746335</p>
            </div>
        </div>
    );
};

export default personalInfo;
import './personalInfo.css';

import React from 'react';

import personalShot from '../../assets/images/personal_shot.jpg';

const personalInfo = (props) => {
    return (
        <div className="comment">
            <img
                src={personalShot}
                alt="personal photo"
                style={{ width: '50%' }}
            />
            <div className="content">
                <h1>曾俊霖</h1>
                <hr />
                <p className="birth">
                    <i className="birthday cake icon"></i>1992/03/04
                </p>
                <p className="address">
                    <i className="map marker alternate icon"></i>新竹縣竹北市
                </p>
                <p className="email">
                    <i className="envelope icon"></i>zxp930110@hotmail.com.tw
                </p>
                <p className="phone">
                    <i className="phone icon"></i>0928746335
                </p>
                <hr />
                <div className="socialLink">
                    <i
                        className="linkedin icon"
                        onClick={() => {
                            window.open(
                                'https://www.linkedin.com/in/joseph-tseng-50ba36136'
                            );
                        }}
                    ></i>
                    <i
                        className="github icon"
                        onClick={() => {
                            window.open('https://github.com/JosephT5566');
                        }}
                    ></i>
                    <i
                        className="flickr icon"
                        onClick={() => {
                            window.open(
                                'https://www.flickr.com/photos/joseph-t_0304/'
                            );
                        }}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default personalInfo;

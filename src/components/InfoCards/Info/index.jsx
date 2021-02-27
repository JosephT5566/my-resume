import React from 'react';

import CakeIcon from '@material-ui/icons/Cake';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import personalShot from 'assets/images/personal_shot.jpg';

import './styles.scss';

const personalInfo = () => {
    return (
        <div id="infoContainer">
            <div className="image">
                <img src={personalShot} alt="personal" style={{ width: '100%' }} />
            </div>
            <div className="content">
                <h1>曾俊霖</h1>
                <div className="item">
                    <CakeIcon className="icon" fontSize="medium" />
                    1992/03/04
                </div>
                <div className="item">
                    <LocationOnIcon className="icon" fontSize="medium" />
                    新竹縣竹北市
                </div>
                <div className="item">
                    <MailIcon className="icon" fontSize="medium" />
                    zxp930110@hotmail.com.tw
                </div>
                <div className="item">
                    <PhoneIcon className="icon" fontSize="medium" />
                    0928746335
                </div>
                <div className="socialLink">
                    <i
                        className="linkedin icon"
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/joseph-tseng-50ba36136');
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
                            window.open('https://www.flickr.com/photos/joseph-t_0304/');
                        }}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default personalInfo;

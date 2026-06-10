import React from 'react';

import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

import personalShot from 'assets/images/profile.jpg';

import './styles.scss';

const PersonalInfo = () => {
    return (
        <div id="infoContainer">
            <div className="image">
                <img src={personalShot} alt="profile" style={{ width: '100%' }} />
            </div>
            <div className="content">
                <h1>曾俊霖</h1>
                <div className="item">
                    <CakeIcon className="icon" fontSize="small" />
                    1992/03/04
                </div>
                <div className="item">
                    <LocationOnIcon className="icon" fontSize="small" />
                    新竹縣竹北市
                </div>
                <div className="item">
                    <MailIcon className="icon" fontSize="small" />
                    zxp930110@hotmail.com.tw
                </div>
                <div className="item">
                    <PhoneIcon className="icon" fontSize="small" />
                    0928746335
                </div>
                <div className="socialLink">
                    <a
                        href={'https://www.linkedin.com/in/joseph-tseng-50ba36136'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="linkedin icon"></i>
                    </a>
                    <a href={'https://github.com/JosephT5566'} target="_blank" rel="noopener noreferrer">
                        <i className="github icon"></i>
                    </a>
                    <a href={'https://www.flickr.com/photos/joseph-t_0304/'} target="_blank" rel="noopener noreferrer">
                        <i className="flickr icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;

import React from 'react';

import personalShot from '../../assets/images/personal_shot.jpg';

const personalInfo = (props) => {
    return (
        <div className="comment">
            <img src={personalShot} alt="personal photo" style={{width: "50%"}}/>
        </div>
    );
};

export default personalInfo;
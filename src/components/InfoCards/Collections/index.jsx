import React from 'react';

import collectionImage1 from 'assets/images/collection1.jpg';

import './collection.scss';

const Collection = () => {
    return (
        <div id="collectionContainer">
            <h1>作品</h1>
            <div className="content">
                <div className="section">
                    <div className="image">
                        <img
                            src={collectionImage1}
                            alt="collectionImage1"
                            onClick={() => {
                                window.open('https://josify.herokuapp.com/register.php');
                            }}
                        />
                    </div>
                    <div className="description">
                        <h2>Josify</h2>
                        <h3>參照Spotify介面規劃的音樂App</h3>
                        <li>PHP</li>
                        <li>JavaScript / JQuery / Ajax</li>
                        <li>HTML5</li>
                        <li>MySQL</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;

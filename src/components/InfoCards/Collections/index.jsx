import React from 'react';

import collectionImage1 from 'assets/images/collection1.jpg';
import './collection.scss';

const collection = () => {
    return (
        <div id="collectionContainer">
            <h1>作品</h1>
            <div className="collection" style={{ display: 'flex' }}>
                <div className="image" style={{ width: '50%' }}>
                    <img
                        src={collectionImage1}
                        alt="collectionImage1"
                        onClick={() => {
                            window.open('https://josify.herokuapp.com/register.php');
                        }}
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                </div>
                <div className="description" style={{ padding: '0 0 0 20px' }}>
                    <h2>Josify</h2>
                    <h3>參照Spotify介面規劃的音樂App</h3>
                    <li>PHP</li>
                    <li>JavaScript / JQuery / Ajax</li>
                    <li>HTML5</li>
                    <li>MySQL</li>
                </div>
            </div>
        </div>
    );
};

export default collection;

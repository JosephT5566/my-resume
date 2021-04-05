import React from 'react';

import collectionImage1 from 'assets/images/collection1.jpg';

import './collection.scss';

const Preview = ({ title, description, image, url, ...props }) => (
    <a className="section" href={url} target="_blank">
        <div className="image">
            <img src={image} alt="collectionImg" />
        </div>
        <div className="description">
            <h2>{title}</h2>
            <h3>{description}</h3>
            {props.children}
        </div>
    </a>
);

const Collection = () => {
    return (
        <div id="collectionContainer">
            <h1>作品</h1>
            <div className="content">
                <Preview
                    title={'Josify'}
                    description={'參照Spotify介面規劃的音樂App'}
                    image={collectionImage1}
                    url={'https://josify.herokuapp.com/register.php'}
                >
                    <li>PHP</li>
                    <li>JavaScript / JQuery / Ajax</li>
                    <li>HTML5</li>
                    <li>MySQL</li>
                </Preview>
                <Preview
                    title={'Megaport Festival Selector'}
                    description={'2021大港開唱，看團選擇器'}
                    image={'https://i.imgur.com/OgYq1S8.png'}
                    url={'https://josepht5566.github.io/musicFest'}
                >
                    <li>React</li>
                    <li>Material ui styles</li>
                    <li>gh pages</li>
                </Preview>
            </div>
        </div>
    );
};

export default Collection;

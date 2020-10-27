import React, { useState, useContext, useEffect } from 'react';

import PositionContext from '../../contexts/PositionContext';
import IndexContext from '../../contexts/IndexContext';
import ScrollyButton from './ScrollyButton';

import './styles.scss';

export default function Navigation() {
    const [isClicked, setIsClicked] = useState(false);
    const { positions, basePoint } = useContext(PositionContext);
    const { onIndexChange } = useContext(IndexContext);
    let isScrolling;

    useEffect(() => {
        // console.log('nav button is Clicked: ', isClicked);
    }, [isClicked]);

    const checkCurrentIndex = (scrollTop) => {
        // console.log(scrollTop)
        let index = 0;
        let correctPoint = scrollTop - basePoint;
        if (correctPoint > positions[0] && correctPoint < positions[1]) {
            index = 1;
        } else if (correctPoint > positions[1] && correctPoint < positions[2]) {
            index = 2;
        } else if (correctPoint > positions[2] && correctPoint < positions[3]) {
            index = 3;
        } else if (correctPoint > positions[3] && correctPoint < positions[4]) {
            index = 4;
        } else if (correctPoint > positions[4] && correctPoint < positions[5]) {
            index = 5;
        } else if (correctPoint > positions[5] && correctPoint < positions[6]) {
            index = 6;
        }
        onIndexChange(index);
    };

    window.addEventListener(
        'scroll',
        (event) => {
            checkCurrentIndex(document.documentElement.scrollTop);
            // Clear our timeout throughout the scroll
            clearTimeout(isScrolling);
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(function () {
                // Run the callback
                if (isClicked) setIsClicked(false);
            }, 250);
        },
        false
    );

    return (
        <section id="sidebar">
            <div className="inner">
                <nav>
                    <ul>
                        <li>
                            <ScrollyButton
                                label="Info"
                                index={0}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[0] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Educations"
                                index={1}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[1] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Works"
                                index={2}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[2] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Expertises"
                                index={3}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[3] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Skills"
                                index={4}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[4] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Introduction"
                                index={5}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[5] + basePoint);
                                }}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Collections"
                                index={6}
                                isClicked={isClicked}
                                onClick={() => {
                                    setIsClicked(true);
                                    window.scrollTo(0, positions[6] + basePoint);
                                }}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

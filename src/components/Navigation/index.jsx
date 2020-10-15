import React, { useState } from 'react';
import { useEffect } from 'react';

import ScrollyButton from './ScrollyButton';

import './styles.scss';

export default function Navigation() {
    const [isClicked, setIsClicked] = useState(false);
    let isScrolling;

    useEffect(() => {
        console.log('nav button is Clicked: ', isClicked);
    }, [isClicked]);

    window.addEventListener(
        'scroll',
        (event) => {
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
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Educations"
                                index={1}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Works"
                                index={2}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Expertises"
                                index={3}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Skills"
                                index={4}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Introduction"
                                index={5}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                        <li>
                            <ScrollyButton
                                label="Collections"
                                index={6}
                                isClicked={isClicked}
                                onClick={() => setIsClicked(true)}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

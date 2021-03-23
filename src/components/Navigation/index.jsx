import React, { useState, useContext, useEffect, useCallback } from 'react';
import Scroll from 'react-scroll';

import PositionContext from '../../contexts/PositionContext';
import IndexContext from '../../contexts/IndexContext';
import ScrollyButton from './ScrollyButton';
import MenuIcon from '@material-ui/icons/Menu';

import './styles.scss';

const scroll = Scroll.animateScroll;

export default function Navigation() {
    const [isClicked, setIsClicked] = useState(false);
    const [active, setActive] = useState(false);
    const { positions, basePoint } = useContext(PositionContext);
    const { onIndexChange } = useContext(IndexContext);
    const activeClass = active ? 'active' : 'inactive';

    const handleScroll = useCallback(() => {
        const checkCurrentIndex = (scrollTop) => {
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

        checkCurrentIndex(document.documentElement.scrollTop);
    }, [positions, basePoint, onIndexChange]);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
        return window.removeEventListener('scroll', () => handleScroll());
    }, [handleScroll]);

    return (
        <section id="sidebar" className={`${activeClass}`}>
            <button
                id="menuButton"
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            >
                <MenuIcon className="icon" />
            </button>
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
                                    scroll.scrollTo(positions[0] + basePoint - 1);
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
                                    scroll.scrollTo(positions[1] + basePoint - 1);
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
                                    scroll.scrollTo(positions[2] + basePoint - 1);
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
                                    scroll.scrollTo(positions[3] + basePoint - 1);
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
                                    scroll.scrollTo(positions[4] + basePoint - 1);
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
                                    scroll.scrollTo(positions[5] + basePoint - 1);
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
                                    scroll.scrollTo(positions[6] + basePoint - 1);
                                }}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

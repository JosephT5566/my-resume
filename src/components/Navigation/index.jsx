import React, { useState } from 'react';
import ScrollyButton from './ScrollyButton';

import './styles.scss';

export default function Navigation() {
    const [currentIndex, setCurrentIndex] = useState(null);

    return (
        <section id="sidebar">
            <div class="inner">
                <nav>
                    <ul>
                        <li
                            onClick={() => {
                                setCurrentIndex('1');
                            }}
                        >
                            <ScrollyButton label="Welcome" index="1" currentIndex={currentIndex} />
                        </li>
                        <li
                            onClick={() => {
                                setCurrentIndex('2');
                            }}
                        >
                            <ScrollyButton label="Who we are" index="2" currentIndex={currentIndex} />
                        </li>
                        <li
                            onClick={() => {
                                setCurrentIndex('3');
                            }}
                        >
                            <ScrollyButton label="What we do" index="3" currentIndex={currentIndex} />
                        </li>
                        <li
                            onClick={() => {
                                setCurrentIndex('4');
                            }}
                        >
                            <ScrollyButton label="Get in touch" index="4" currentIndex={currentIndex} />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

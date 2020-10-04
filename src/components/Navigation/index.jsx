import React, { useState } from 'react';
import ScrollyButton from './ScrollyButton';

import './styles.scss';

export default function Navigation() {
    return (
        <section id="sidebar">
            <div className="inner">
                <nav>
                    <ul>
                        <li>
                            <ScrollyButton label="Info" index={0} />
                        </li>
                        <li>
                            <ScrollyButton label="Educations" index={1} />
                        </li>
                        <li>
                            <ScrollyButton label="Works" index={2} />
                        </li>
                        <li>
                            <ScrollyButton label="Expertises" index={3} />
                        </li>
                        <li>
                            <ScrollyButton label="Skills" index={4} />
                        </li>
                        <li>
                            <ScrollyButton label="Introduction" index={5} />
                        </li>
                        <li>
                            <ScrollyButton label="Collections" index={6} />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

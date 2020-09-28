import React, { useState } from 'react';
import ScrollyButton from './ScrollyButton';
import { CurrentIndexStore } from './Context';

import './styles.scss';

export default function Navigation() {
    return (
        <section id="sidebar">
            <div class="inner">
                <CurrentIndexStore>
                    <nav>
                        <ul>
                            <li>
                                <ScrollyButton label="Welcome" index={1} />
                            </li>
                            <li>
                                <ScrollyButton label="Who we are" index={2} />
                            </li>
                            <li>
                                <ScrollyButton label="What we do" index={3} />
                            </li>
                            <li>
                                <ScrollyButton label="Get in touch" index={4} />
                            </li>
                        </ul>
                    </nav>
                </CurrentIndexStore>
            </div>
        </section>
    );
}

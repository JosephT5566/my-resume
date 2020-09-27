import React from 'react';

import Collections from '../InfoCards/Collections';
import Educations from '../InfoCards/Educations';
import Expertises from '../InfoCards/Expertises';
import Info from '../InfoCards/Info';
import Intro from '../InfoCards/Intro';
import Skills from '../InfoCards/Skills';
import Works from '../InfoCards/Works';

export default function Menu() {
    return (
        <>
            <Info />
            <Educations />
            <Works />
            <Expertises />
            <Skills />
            <Intro />
            <Collections />
        </>
    );
}

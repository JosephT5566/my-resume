import React, { useContext, useState, useEffect } from 'react';
import PositionContext from '../../contexts/PositionContext';

import Collections from '../InfoCards/Collections';
import Educations from '../InfoCards/Educations';
import Expertises from '../InfoCards/Expertises';
import Info from '../InfoCards/Info';
import Intro from '../InfoCards/Intro';
import Skills from '../InfoCards/Skills';
import Works from '../InfoCards/Works';

import InfoCard from '../InfoCards/InfoCard';

export default function Menu() {
    const { onPositionChange, onBasePointChange } = useContext(PositionContext);
    const [elementTop, setElementTop] = useState({});

    useEffect(() => {
        // console.log('element top: ', elementTop);
        onPositionChange(elementTop);
        onBasePointChange(document.documentElement.scrollTop)
    }, [elementTop]);

    return (
        <div className="ui container">
            <InfoCard id={0} setTop={setElementTop}>
                <Info />
            </InfoCard>
            <InfoCard id={1} setTop={setElementTop}>
                <Educations />
            </InfoCard>
            <InfoCard id={2} setTop={setElementTop}>
                <Works />
            </InfoCard>
            <InfoCard id={3} setTop={setElementTop}>
                <Expertises />
            </InfoCard>
            <InfoCard id={4} setTop={setElementTop}>
                <Skills />
            </InfoCard>
            <InfoCard id={5} setTop={setElementTop}>
                <Intro />
            </InfoCard>
            <InfoCard id={6} setTop={setElementTop}>
                <Collections />
            </InfoCard>
        </div>
    );
}

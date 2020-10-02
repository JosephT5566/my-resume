import React, { useContext } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CurrentIndexContext from '../../contexts/IndexContext';

import Collections from '../InfoCards/Collections';
import Educations from '../InfoCards/Educations';
import Expertises from '../InfoCards/Expertises';
import Info from '../InfoCards/Info';
import Intro from '../InfoCards/Intro';
import Skills from '../InfoCards/Skills';
import Works from '../InfoCards/Works';
import Footer from '../Footer';

import './styles.scss';

export default function Menu() {
    const currentIndexContext = useContext(CurrentIndexContext);

    return (
        <div id="main">
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(1);
                }}
            >
                <Info />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(2);
                }}
            >
                <Educations />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(3);
                }}
            >
                <Works />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(4);
                }}
            >
                <Expertises />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(5);
                }}
            >
                <Skills />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(6);
                }}
            >
                <Intro />
            </ScrollTrigger>
            <ScrollTrigger
                onEnter={() => {
                    currentIndexContext.onIndexChange(7);
                }}
            >
                <Collections />
            </ScrollTrigger>
            <Footer />
        </div>
    );
}

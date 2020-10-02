import React, { useContext, useEffect, useRef } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CurrentIndexContext from '../../contexts/IndexContext';
import ScrollContext from '../../contexts/ScrollContext';

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
    const scrollContext = useContext(ScrollContext);
    const menuRef = useRef(null);

    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        divRefs.forEach((divRef, index) => {
            // console.log(divRef.current.getBoundingClientRect().top);
            scrollContext.onSetPositions(
                index,
                divRef.current.getBoundingClientRect().top,
                divRef.current.getBoundingClientRect().bottom
            );
        });
    }, []);

    const onScroll = () => {
        // const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
        const scrollTop = menuRef.current.scrollTop;
        scrollContext.onScrollChange(scrollTop);
        // console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`);
        // console.log(infoRef.current.getBoundingClientRect().y);
    };

    return (
        <div id="main" ref={menuRef} onScroll={onScroll}>
            <div ref={divRefs[0]}>
                <Info />
            </div>
            <div ref={divRefs[1]}>
                <Educations />
            </div>
            <div ref={divRefs[2]}>
                <Works />
            </div>
            <div ref={divRefs[3]}>
                <Expertises />
            </div>
            <div ref={divRefs[4]}>
                <Skills />
            </div>
            <div ref={divRefs[5]}>
                <Intro />
            </div>
            <div ref={divRefs[6]}>
                <Collections />
            </div>
            <Footer />
        </div>
    );
}

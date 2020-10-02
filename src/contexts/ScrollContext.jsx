import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';

import IndexContext from './IndexContext';

const Context = React.createContext(null); // default value

export function ScrollStore(props) {
    const [scrollTop, setScrollTop] = useState(0);
    const [positons, setPositions] = useState({});
    const indexContext = useContext(IndexContext);

    const onScrollChange = (scrollTop) => setScrollTop(scrollTop);
    const onSetPositions = (index, top, bottom) => {
        const newPosition = { [index]: { top, bottom } };
        setPositions(_.assign(positons, newPosition));
    };

    const detectPosition = (currentPosition) => {
        return 1;
    };

    useEffect(() => {
        console.log(detectPosition(scrollTop));
        indexContext.onIndexChange(detectPosition(scrollTop));
    }, [scrollTop]);

    return <Context.Provider value={{ scrollTop, onScrollChange, onSetPositions }}>{props.children}</Context.Provider>;
}

export default Context;

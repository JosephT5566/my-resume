import React, { useState, useEffect } from 'react';

const Context = React.createContext(null); // default value

export function PositionStore(props) {
    const [positions, setPositions] = useState({});

    const onPositionChange = (position) => {
        setPositions(position);
    };

    useEffect(() => {
        // console.log('positions in context: ',positions);
    }, [positions]);

    return <Context.Provider value={{ positions, onPositionChange }}>{props.children}</Context.Provider>;
}

export default Context;

import React, { useState, useEffect } from 'react';

const Context = React.createContext(null); // default value

export function PositionStore(props) {
    const [positions, setPositions] = useState({});
    const [basePoint, setBasePoint] = useState(0);

    const onPositionChange = (position) => {
        setPositions(position);
    };

    const onBasePointChange = (position) => {
        setBasePoint(position);
    };

    // useEffect(() => {
    //     console.log('positions in context: ', positions);
    // }, [positions]);

    // useEffect(() => {
    //     console.log('base point in context: ', basePoint);
    // }, [basePoint]);

    return (
        <Context.Provider value={{ positions, onPositionChange, basePoint, onBasePointChange }}>
            {props.children}
        </Context.Provider>
    );
}

export default Context;

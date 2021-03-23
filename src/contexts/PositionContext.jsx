import React, { useState } from 'react';

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

    return (
        <Context.Provider value={{ positions, onPositionChange, basePoint, onBasePointChange }}>
            {props.children}
        </Context.Provider>
    );
}

export default Context;

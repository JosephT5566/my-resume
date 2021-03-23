import React, { useState, useCallback } from 'react';

const Context = React.createContext(null); // default value

export function PositionStore(props) {
	const [positions, setPositions] = useState({});

	const handlePositionSetting = useCallback((position) => {
		setPositions((prev) => ({ ...prev, ...position }));
	}, []);

	return <Context.Provider value={{ positions, handlePositionSetting }}>{props.children}</Context.Provider>;
}

export default Context;

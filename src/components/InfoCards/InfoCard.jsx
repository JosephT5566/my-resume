import React, { useRef, useEffect, useContext } from 'react';
import PositionContext from '../../contexts/PositionContext';

import './InfoCard.scss';

export default function InfoCard({ id, ...props }) {
	const { positions, handlePositionSetting } = useContext(PositionContext);
	const cardRef = useRef(null);
	const offsetTop = cardRef.current ? cardRef.current.offsetTop : 0;

	useEffect(() => {
		handlePositionSetting({ [id]: offsetTop });
	}, [handlePositionSetting, id, offsetTop]);

	return (
		<div id="infoCard" ref={cardRef}>
			<div style={{ opacity: '0.5' }}>{positions[id]}</div>
			{props.children}
		</div>
	);
}

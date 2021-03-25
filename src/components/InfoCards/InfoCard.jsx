import React, { useRef, useEffect, useContext } from 'react';
import PositionContext from '../../contexts/PositionContext';

import './InfoCard.scss';

export default function InfoCard({ id, ...props }) {
	const { handlePositionSetting } = useContext(PositionContext);
	const cardRef = useRef(null);

	useEffect(() => {
		handlePositionSetting({ [id]: cardRef });
	}, [handlePositionSetting, id]);

	return (
		<div id="infoCard" ref={cardRef}>
			{props.children}
		</div>
	);
}

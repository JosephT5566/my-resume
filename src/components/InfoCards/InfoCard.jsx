import React, { useRef, useContext } from 'react';
import PositionContext from '../../contexts/PositionContext';

import './InfoCard.scss';

export default function InfoCard({ id, ...props }) {
	const { handlePositionSetting } = useContext(PositionContext);
	const cardRef = useRef(null);
	const offsetTop = cardRef.current ? cardRef.current.offsetTop : 0;

	setTimeout(() => {
		handlePositionSetting({ [id]: offsetTop });
	});

	return (
		<div id="infoCard" ref={cardRef}>
			{props.children}
		</div>
	);
}

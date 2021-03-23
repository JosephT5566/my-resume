import React, { useRef, useEffect } from 'react';

import './InfoCard.scss';

export default function InfoCard({ id, setTop, children }) {
	const cardRef = useRef(null);

	useEffect(() => {
		setTop((preValue) => ({ ...preValue, [id]: cardRef.current.offsetTop }));
	}, []);

	return (
		<div id="infoCard" ref={cardRef}>
			{children}
		</div>
	);
}

import React, { useRef, useEffect } from 'react';

export default function InfoCard({ id, setTop, children }) {
    const cardRef = useRef(null);

    useEffect(() => {
        setTop((preValue) => {
            return { ...preValue, [id]: cardRef.current.getBoundingClientRect().top };
        });
    }, []);

    return <div ref={cardRef}>{children}</div>;
}

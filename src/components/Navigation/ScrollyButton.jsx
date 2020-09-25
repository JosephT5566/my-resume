import React, { useEffect, useState } from 'react';

export default function ScrollyButton({ label, index, currentIndex, onClick = null }) {
    const [active, setActive] = useState('');

    useEffect(() => {
        if (index === currentIndex) {
            setActive('active');
        } else {
            if (active === 'active') setActive('');
        }
    }, [currentIndex]);

    return (
        <a className={`scrolly ${active}`} onClick={onClick}>
            {label}
        </a>
    );
}

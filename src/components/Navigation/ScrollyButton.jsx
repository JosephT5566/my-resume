import React, { useContext } from 'react';
import CurrentIndexContext from './Context';

export default function ScrollyButton({ label, index, onClick = null }) {
    const currentIndexContext = useContext(CurrentIndexContext);
    const active = index === currentIndexContext.currentIndex ? 'active' : '';

    return (
        <a
            className={`scrolly ${active}`}
            onClick={() => {
                currentIndexContext.onIndexChange(index);
                if (onClick) onClick();
            }}
        >
            {label}
        </a>
    );
}

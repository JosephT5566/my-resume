import React, { useContext } from 'react';
import CurrentIndexContext from '../../contexts/IndexContext';

export default function ScrollyButton({ label, index, onClick = null }) {
    const { currentIndex } = useContext(CurrentIndexContext);
    const isActivatable = () => index === currentIndex;
    const active = isActivatable() ? 'active' : '';

    return (
        <a
            className={`scrolly ${active}`}
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            {label}
        </a>
    );
}

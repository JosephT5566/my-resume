import React, { useContext } from 'react';
import CurrentIndexContext from '../../contexts/IndexContext';

export default function ScrollyButton({ label, index, isClicked, onClick = null }) {
    const { currentIndex } = useContext(CurrentIndexContext);
    const isActivatable = () => index === currentIndex;
    const active = isActivatable() ? 'active' : '';

    return (
        <div
            className={`scrolly ${active}`}
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            {label}
        </div>
    );
}

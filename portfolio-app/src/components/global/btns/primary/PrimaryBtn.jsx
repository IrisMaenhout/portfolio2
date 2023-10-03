import React from 'react';
import styles from './primaryBtn.module.css';

function PrimaryBtn({text, actionOnClickFunc, className}) {

    return (
        <button onClick={actionOnClickFunc} className={`${styles.primaryBtn} ${className}`}>
            {text}
        </button>
    );
}

export default PrimaryBtn;
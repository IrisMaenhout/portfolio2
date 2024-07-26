import React from 'react';
import styles from './primaryBtn.module.css';

function PrimaryBtn({text, actionOnClickFunc, className}) {

    return (
        <button onClick={actionOnClickFunc} className={`${styles.primaryBtn} ${className}`}>
            <div className={styles.inner}>
                {text}
            </div>
        </button>
    );
}

export default PrimaryBtn;
import React from 'react';
import styles from './primaryBtn.module.css';

function PrimaryBtn({text, actionOnClickFunc}) {

    return (
        <button onClick={actionOnClickFunc} className={styles.primaryBtn}>
            {text}
        </button>
    );
}

export default PrimaryBtn;
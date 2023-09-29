import React from 'react';
import { Link } from 'react-router-dom';
import styles from './secondaryBtn.module.css';

function SecondaryBtn({location, text}) {
    return (
        <Link to={location} className={styles.secondaryBtn}>
            {text}
        </Link>
    );
}

export default SecondaryBtn;
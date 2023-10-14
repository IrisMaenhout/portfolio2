import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cta.module.css';

function Cta ({ctaText, url, btnText}) {
    return (
        <div className={styles.cta}>
            <h4>{ctaText}</h4>
            <Link to={url}>{btnText}</Link>
        </div>
    );
}

export default Cta ;
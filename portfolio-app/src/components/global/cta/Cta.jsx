import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cta.module.css';
import PrimaryBtn from '../btns/primary/PrimaryBtn';

function Cta ({ctaText, url, btnText}) {
    return (
        <div className={styles.cta}>
            <h4>{ctaText}</h4>
            <PrimaryBtn text={btnText}/>
        </div>
    );
}

export default Cta ;
import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import styles from './cta.module.css';
import PrimaryBtn from '../btns/primary/PrimaryBtn';

function Cta ({ctaText, url, btnText}) {
    const navigate = useNavigate();
    return (
        <div className={styles.cta}>
            <h4>{ctaText}</h4>
            <PrimaryBtn text={btnText} actionOnClickFunc={()=> navigate(url)}/>
        </div>
    );
}

export default Cta ;
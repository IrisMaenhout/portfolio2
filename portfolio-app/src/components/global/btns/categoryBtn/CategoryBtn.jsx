import React from 'react';
import { Link } from 'react-router-dom';
import styles from './categoryBtn.module.css';

function CategoryBtn({location, logoClassName, text}) {
    return (
        <Link to={location} className={styles.btn}>
             <i className={logoClassName}></i>
             <span>{text}</span>
        </Link>
    );
}

export default CategoryBtn;
import React from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';

function ProjectCard({className}) {
    return (
        <div className={`${styles.card } ${className}`}>
            <img src='https://media.routard.com/image/66/6/couv-philippines.1613666.142.jpg' alt="" />
            <Link to={'/project-detail'} className={`${styles.projectCard}`}>
                <div className={styles.category}>
                    <i className={`fa-brands fa-wordpress ${styles.categoryLogo}`}></i>
                    <i className={`fa-solid fa-code ${styles.categoryLogo}`}></i>
                    <i className={`fa-solid fa-palette ${styles.categoryLogo}`}></i>
                </div>

                <h3>Project name</h3>
            </Link>

        </div>
    );
}

export default ProjectCard;
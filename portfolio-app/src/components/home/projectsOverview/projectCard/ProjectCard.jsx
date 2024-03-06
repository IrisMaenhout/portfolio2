import React from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';

function ProjectCard({className}) {
    return (
        // <div className={`${styles.card } ${className}`}>
        //     <img src='https://media.routard.com/image/66/6/couv-philippines.1613666.142.jpg' alt="" />
        //     <Link to={'/project-detail'} className={`${styles.projectCard}`}>
        //         <div className={styles.category}>
        //             <i className={`fa-brands fa-wordpress ${styles.categoryLogo}`}></i>
        //             <i className={`fa-solid fa-code ${styles.categoryLogo}`}></i>
        //             <i className={`fa-solid fa-palette ${styles.categoryLogo}`}></i>
        //         </div>

        //         <h3>Project name</h3>
        //     </Link>

        // </div>


        <Link to={"/"} className={styles.card}>
            <div className={styles.image}>
                <div className={styles.btns}>
                    <Link to={"/"} className={styles.websiteLink}><i className="fa-solid fa-link"></i></Link>
                    <Link to={"/"} className={styles.readMoreLink}><i className="fa-solid fa-right-long"></i></Link>
                </div>
            </div>

            <div className={styles.cardContent}>
                <h3>Project</h3>
                <p>Website om geboortelijstjes aan te maken.</p>
                <div className={styles.categoryHashtags}>
                    <i>#Full stack development</i>
                    <i>#UX/UI design</i>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
import React from 'react';
import styles from './prevNextProject.module.css';
import { Link } from 'react-router-dom';

function PrevNextProject({prevProject, nextProject}) {
    return (
        <div className={styles.flexContainer}>
            <Link to={prevProject.url}>
                <div className={styles.arrow}>
                    <i className='fi fi-rr-arrow-left gradientText'></i>
                </div>

                <div className={styles.text}>
                    <h3 className='gradientText'>Vorig project</h3>
                    <p>{prevProject.name}</p>
                </div>
            </Link>

            <Link to={nextProject.url}>
                
                <div className={`${styles.text} ${styles.alignRight}`}>
                    <h3 className='gradientText'>Volgend project</h3>
                    <p>{nextProject.name}</p>
                </div>

                <div className={styles.arrow}>
                    <i className='fi fi-rr-arrow-right gradientText'></i>
                </div>
            </Link>
            
        </div>
    );
}

export default PrevNextProject;
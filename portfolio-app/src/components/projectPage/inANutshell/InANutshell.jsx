import React from 'react';
import styles from './inANutshell.module.css';

function InANutshell(props) {
    return (
        <div className={styles.shortOverview}>
            <h4 className={styles.smallTitle}>In a nutshell</h4>

            <h2>De uitdaging</h2>

            <div>
                <div className={styles.bulletPoint}>
                    <i className={`fi fi-rr-arrow-right ${styles.arrowIcon}`}></i>
                    <p>Reden</p>
                </div>

                <div className={styles.bulletPoint}>
                    <i className={`fi fi-rr-arrow-right ${styles.arrowIcon}`}></i>
                    <p>Reden</p>
                </div>

                <div className={styles.bulletPoint}>
                    <i className={`fi fi-rr-arrow-right ${styles.arrowIcon}`}></i>
                    <p>Reden</p>
                </div>
                
            </div>

            <div className={styles.sildeInfoContainer}>
                <div className={styles.circlesContainer}>
                    <div className={`${styles.circle} ${styles.selectedCircle}`}></div>
                    <div className={`${styles.circle}`}></div>
                    <div className={`${styles.circle}`}></div>
                </div>

                <div className={styles.arrowBtns}>
                    <button>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InANutshell;
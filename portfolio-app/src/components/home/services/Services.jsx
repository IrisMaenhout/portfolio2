import React from 'react';
import styles from "./services.module.css";

function Services() {
    return (
        <div className={styles.services}>
            <h2 className='gradientText'>Diensten</h2>

            <div className={styles.servicesContainer}>
                <div>
                    <i className="fi fi-rr-layout-fluid"></i>
                    <h4>UI/UI design</h4>
                </div>

                <div>
                    <i className="fi fi-rr-browser"></i>
                    <h4>Front end development</h4>
                </div>

                <div>
                    <i className="fi fi-rr-display-code"></i>
                    <h4>Full stack development</h4>
                </div>
            </div>
        </div>
    );
}

export default Services;
import React, { useState } from 'react';
import styles from './contactCard.module.css';
import { Link } from 'react-router-dom';

function ContactCard(props) {


    return (
        
        <div className={styles.card}>

            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <h5>Contact</h5>
                    <h2 className='gradientText'>Zin om samen te werken?</h2>
                    <p>Contacteer mij gerust en laten we er samen in vliegen.</p>

                    <div className={styles.phoneNrEmailDiv}>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:irismaenhout@gmail.com">irismaenhout@gmail.com</a>
                    </div>

                    <div className={styles.phoneNrEmailDiv}>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+32 4325 2909">+32 4325 2909</a>
                    </div>

                </div>


                <div className={styles.socialMedia}>
                    <Link to={''}>
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>

                    <Link to={''}>
                        <i className="fa-brands fa-github"></i>
                    </Link>

                    <Link to={''}>
                        <i className="fa-brands fa-facebook-messenger"></i>
                    </Link>
                    
                    
                </div>
            </div>

            <div className={styles.image}>

            </div>
                
        </div>

    );
}

export default ContactCard;
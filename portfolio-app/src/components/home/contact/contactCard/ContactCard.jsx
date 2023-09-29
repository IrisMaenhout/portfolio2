import React, { useState } from 'react';
import styles from './contactCard.module.css';
import { Link } from 'react-router-dom';

function ContactCard(props) {


    return (
        
        <div className={styles.card}>
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

            <div className={styles.contactInfo}>
                <div>
                    <h4>Email</h4>
                    <a href="mailto:irismaenhout@gmail.com">irismaenhout@gmail.com</a>
                </div>

                <div>
                    <h4>Telefoon nummer</h4>
                    <a href="tel:+32 4325 2909">+32 4325 2909</a>
                </div>

            </div>
                
        </div>

    );
}

export default ContactCard;
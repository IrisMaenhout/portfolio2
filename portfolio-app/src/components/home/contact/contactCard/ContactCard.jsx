import React, { useState } from 'react';
import styles from './contactCard.module.css';
import { Link } from 'react-router-dom';

function ContactCard({apiData}) {
    const contactData = apiData !== null ?  apiData.data.attributes.contactInfo : null;
    const contactImgVideoData = apiData !== null ?  
        apiData.data.attributes.ContactSectionImgVideo.data !== null ?
            apiData.data.attributes.ContactSectionImgVideo.data.attributes
            : null
        : null;


    return (
        
        <div className={styles.card}>

            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <h5>Contact</h5>
                    <h2 className='gradientText'>Zin om samen te werken?</h2>
                    <p>Contacteer mij dan gerust.</p>

                    { (contactData !== null && contactData.email !== null) &&
                        <div className={styles.phoneNrEmailDiv}>
                            <i className="fa-solid fa-envelope"></i>
                            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                        </div>
                    }

                    { (contactData !== null && contactData.phoneNr !== null) &&

                        <div className={styles.phoneNrEmailDiv}>
                            <i className="fa-solid fa-phone"></i>
                            <a href={`tel:${contactData.phoneNr}`}>{contactData.phoneNr}</a>
                        </div>
                    }
                    
                    { (contactData !== null && contactData.myAddress) &&
                        
                        <div className={styles.phoneNrEmailDiv}>
                            <i className="fa-solid fa-location-dot"></i>
                            <a href={`https://www.google.com/maps/place/${contactData.myAddress.details.formatted_address}`} target="_blank" rel="noreferrer">{contactData.myAddress.description}</a>
                        </div>
                    }

                </div>


                <div className={styles.socialMedia}>

                    { (contactData !== null && contactData.linkedInUrl !== null) &&
                        <a href={contactData.linkedInUrl} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    }


                    { (contactData !== null && contactData.githubUrl !== null) &&
                        <a href={contactData.githubUrl} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    }


                    { (contactData !== null && contactData.messengerUrl !== null) &&
                        <a href={contactData.messengerUrl} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook-messenger"></i>
                        </a>
                    }
                    
                    
                </div>
            </div>

            {
                contactImgVideoData !== null ?
                contactImgVideoData.ext.match(/\.(jpg|jpeg|png|gif)$/i) ?
                        
                    <img className={styles.image} src={`${process.env.REACT_APP_API_ROOT_URL}${contactImgVideoData.url}`} alt={contactImgVideoData.alternativeText}/>

                    :

                    <video className={styles.image} autoPlay loop muted playsInline>
                        <source src={`${process.env.REACT_APP_API_ROOT_URL}${contactImgVideoData.url}`} type={contactImgVideoData.mime}/>
                    </video>
                :

                <></>
            }
                
        </div>

    );
}

export default ContactCard;
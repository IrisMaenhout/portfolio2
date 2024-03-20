import React from 'react';
import ContactCard from './contactCard/ContactCard';
import styles from './contact.module.css';

function Contact({apiData}) {

    return (
        <div className={styles.marginContainer} id="contact">
            <ContactCard apiData={apiData}/>
        </div>
    );
}

export default Contact;
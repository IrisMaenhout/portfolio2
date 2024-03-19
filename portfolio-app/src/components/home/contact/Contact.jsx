import React from 'react';
import ContactCard from './contactCard/ContactCard';
import styles from './contact.module.css';

function Contact({apiData}) {
    return (
        <div className={styles.marginContainer}>
            <ContactCard />
        </div>
    );
}

export default Contact;
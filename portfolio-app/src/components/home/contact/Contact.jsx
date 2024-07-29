import React from 'react';
import ContactCard from './contactCard/ContactCard';
import styles from './contact.module.css';
import ScaleUp from '../../global/animations/ScaleUp';

function Contact({apiData}) {

    return (
        <section className={styles.marginContainer} id="contact">
            <ScaleUp delay={100} isSlow={true}>
                <ContactCard apiData={apiData}/>

            </ScaleUp>
        </section>
    );
}

export default Contact;
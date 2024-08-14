import React from 'react';
import ContactCard from './contactCard/ContactCard';
import styles from './contact.module.css';
import ScaleUp from '../../global/animations/ScaleUp';
import FadeIn from '../../global/animations/FadeIn';

function Contact({apiData}) {

    return (
        <section className={styles.marginContainer} id="contact">
            <FadeIn delay={100} isSlow={true}>
                <ContactCard apiData={apiData}/>

            </FadeIn>
        </section>
    );
}

export default Contact;
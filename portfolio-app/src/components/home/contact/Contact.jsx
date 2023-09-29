import React from 'react';
import ContactCard from './contactCard/ContactCard';
import styles from './contact.module.css';

function Contact(props) {
    return (
        <div>
            <h2 className='title'>Contact</h2>
            
            <div className={styles.flexContainer}>
                <div className={styles.contactCard}>
                    <ContactCard />
                </div>
                
                <div className={styles.imgContainer}>
                    <img src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNDMwNzY3MzQxMTUxODEx/why-are-my-text-messages-green.jpg" alt="" />

                </div>
            </div>
            

        </div>
    );
}

export default Contact;
import React from 'react';
import styles from './footer.module.css';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <p>© All rights reserved | Iris Maenhout - {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
import React from 'react';
// import style from './websiteExtraInfoBtn.module.css';
import styles from "./websiteExtraInfo.module.css";

function WebsiteExtraInfoBtn({iconClassName, text, location}) {
    return (
        <a href={location} className={styles.externalLink}>
            <i className={iconClassName}></i>
            <p>{text}</p>
        </a>
    );
}

export default WebsiteExtraInfoBtn;
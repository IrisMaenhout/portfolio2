import React, { useState, useEffect } from 'react';
import styles from './typeWriterEffect.module.css'; // Assuming you have a CSS module file

const TypewriterEffect = ({jobTitlesArray}) => {
    const [text, setText] = useState("");
        
    useEffect(() => {
        const textLoad = () => {
            jobTitlesArray.forEach((jobTitle, index) => {
                setTimeout(() => {
                    setText(jobTitle);
                }, index * 4000);
            });

        };

        textLoad();

        const intervalId = setInterval(textLoad, jobTitlesArray.length * 4000); // Adjust interval based on total time needed

        return () => clearInterval(intervalId);
    }, [jobTitlesArray]);


    return (
        <div className={styles.container}>
            <span className={`${styles.text} ${styles.animationText}`}>{text}</span>
        </div>
    )

};

export default TypewriterEffect;



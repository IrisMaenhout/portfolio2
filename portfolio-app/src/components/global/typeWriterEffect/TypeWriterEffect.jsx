import React, { useState, useEffect } from 'react';
import styles from './typeWriterEffect.module.css'; // Assuming you have a CSS module file

const TypewriterEffect = () => {

    const [jobTitlesArray, setJobTitlesArray] = useState([]);
    const getData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/job-titles?filters[hide][$eq]=false`);
        const json = await resp.json();
        setJobTitlesArray(json.data.map(item => item.attributes.job));
    }
    
    useEffect(() => {
        getData();
    }, []);

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


    if(jobTitlesArray.length > 1){
        return (
            <div className={styles.container}>
                <span className={`${styles.text} ${styles.animationText}`}>{text}</span>
            </div>
        )
    }else{
        return (
            <div className={styles.container}>
                <span className={`${styles.text}`}>{text}</span>
            </div>
        )
    }
    

};

export default TypewriterEffect;



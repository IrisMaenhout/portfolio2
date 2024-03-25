import React, { useState, useEffect } from 'react';
import styles from './typeWriterEffect.module.css';
import { Typewriter } from 'react-simple-typewriter';

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

                <span className={styles.text}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                    words={jobTitlesArray}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </span>
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



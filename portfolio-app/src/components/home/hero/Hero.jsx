import React, { useEffect, useState } from 'react';
import styles from './hero.module.css';
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import SecondaryBtn from '../../global/btns/secondary/SecondaryBtn';
import TypewriterEffect from '../../global/typeWriterEffect/TypeWriterEffect';

function Hero(props) {
    
    return (
        <div className={styles.flexContainer}>
            
            <div className={styles.introContainer}>
                <h1 className={`gradientText ${styles.name}`}>Iris</h1>
                <h1 className={`gradientText ${styles.name}`}>Maenhout</h1>
            
                <TypewriterEffect jobTitlesArray={["front-end developer", "UX/UI designer", "full stack developer", "freelancer"]}/>

                <p>
                    Ik heb een passie voor het creëren van webapplicaties die een mooie en gebruiksvriendelijke interfase hebben.
                </p>

                <div className={styles.btnsContainer}>
                    <PrimaryBtn text={'Neem contact op'}/>
                </div>

            </div>

            <div className={styles.imgContainer}>
                {/* <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="" /> */}

                <video autoPlay loop muted playsInline>
                    <source src="/video/hero_animation.webm" type="video/webm"/>
                </video>
            </div>

            
        </div>
    );
}

export default Hero;
import React, { useEffect, useRef, useState } from 'react';
import styles from "./personalInfo.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import AvatarCanvas from '../../global/avatar/avatarCanvas/AvatarCanvas';
import { useSpring, animated } from '@react-spring/web';

function PersonalInfo(props) {

    const [isVisible, setIsVisible] = useState(false);
    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);

    const springData = {
        from: { scale: 0.8 },
        to: { scale: isVisible ? 1 : 0.5 },
        config: { 
            tension: 100, // Increase tension for slower transition
            friction: 14 // Increase friction for smoother transition
        }
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8 // Intersection threshold
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once the element is visible
                }
            });
        }, options);

        if (firstContainerRef.current) {
            observer.observe(firstContainerRef.current);
        }

        if (secondContainerRef.current) {
            observer.observe(firstContainerRef.current);
        }

        if (thirdContainerRef.current) {
            observer.observe(firstContainerRef.current);
        }

        

        return () => {
            if (firstContainerRef.current) {
                observer.unobserve(firstContainerRef.current);
            }

            if (secondContainerRef.current) {
                observer.unobserve(secondContainerRef.current);
            }

            if (thirdContainerRef.current) {
                observer.unobserve(thirdContainerRef.current);
            }
        };
    }, []);

    const personalDataHeader = useSpring(springData);
    const personalDataInfo = useSpring(springData);
    const skills = useSpring(springData);

    return (
        <div className={styles.flexContainer}>
            <div className={styles.infoContainer}>
                
                <animated.div className={styles.personalDataHeader} style={personalDataHeader} ref={firstContainerRef}>
                    <div className={styles.personalDataHeaderContent}>
                        <div>
                            <h5>Naam:</h5>
                            <p className={styles.name}>Iris{window.innerWidth > 600 ? " " : "\n"}Maenhout</p>

                        </div>

                        <div>
                            <h5>Leeftijd:</h5>
                            <p>22</p>
                        </div>

                        <div>
                            <h5>Land:</h5>
                            <p>België</p>
                        </div>
                    </div>

                </animated.div>


                <animated.div className={styles.personalDataInfo} style={personalDataInfo}  ref={secondContainerRef}>
                    <div className={styles.personalDataInfoHeader}>
                        <h3 className='gradientText'>Info</h3>
                    </div>
                    <div className={styles.personalDataInfoContent}>
                        <ul>
                            <li>Passie voor het creëren van webaplicaties</li>
                            <li>Creatief Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates excepturi id quae non earum, laborum esse sit in quasi maiores. Rem sint at earum excepturi magni possimus sequi minima numquam!</li>
                            <li>Oog voor detail</li>
                        </ul>
                    </div>
                </animated.div>


                <animated.div className={styles.personalDataInfo} style={skills}  ref={thirdContainerRef}>
                    <div className={styles.personalDataInfoHeader}>
                        <h3 className='gradientText'>Skills</h3>
                    </div>
                    <div className={`${styles.personalDataInfoContent} ${styles.skillsContainer}`}>
                        <div className={styles.grid}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </animated.div>

                <div className={styles.cvBtnContainer}>
                    <PrimaryBtn text={"Bekijk mijn CV"}/>
                </div>
                

            </div>

            <div className={styles.canvas3D}>
                <AvatarCanvas/>
            </div>
            
        </div>
    );
}

export default PersonalInfo;
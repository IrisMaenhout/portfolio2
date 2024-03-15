import React, { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css';
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import TypeWriterEffect from "../../global/typeWriterEffect/TypeWriterEffect";
import { useSpring, animated } from '@react-spring/web';

function Hero(props) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const config = { 
        tension: 50, 
        friction: 8 
    }

    // Animations for the elements
    const introAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: isVisible ? 1 : 0},
        config
    });

    const firstNameAnimation = useSpring({
        from: { transform: 'translateX(150px)' },
        to: { transform: isVisible? 'translateX(0)' : 'translateX(150px)' },
        config
    });

    const lastNameAnimation = useSpring({
        from: { transform: 'translateX(-150px)' },
        to: { transform: isVisible ? 'translateX(0)' : 'translateX(-150px)' },
        config
    });

    return (
        <div className={styles.flexContainer} ref={containerRef}>
            <div className={styles.introContainer}>
                <animated.h1 className={`gradientText ${styles.name}`} style={firstNameAnimation}>Iris</animated.h1>
                <animated.h1 className={`gradientText ${styles.name}`} style={lastNameAnimation}>Maenhout</animated.h1>
            
                <animated.div style={introAnimation}>
                    <TypeWriterEffect jobTitlesArray={["front-end developer", "UX/UI designer", "full stack developer", "freelancer"]}/>
                    
                    <p>
                        Ik heb een passie voor het creëren van webapplicaties die een mooie en gebruiksvriendelijke interfase hebben.
                    </p>

                    <div className={styles.btnsContainer}>
                        <PrimaryBtn text={'Neem contact op'}/>
                    </div>

                </animated.div>
            </div>

            {/* animated.div component for the image */}
            <animated.div className={styles.imgContainer}>
                <video autoPlay loop muted playsInline>
                    <source src="/video/hero_animation.webm" type="video/webm"/>
                </video>
            </animated.div>
        </div>
    );
}

export default Hero;

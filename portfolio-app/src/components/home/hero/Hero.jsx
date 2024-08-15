import React, { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css';
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import TypeWriterEffect from "../../global/typeWriterEffect/TypeWriterEffect";
import { useSpring, animated } from '@react-spring/web';
import ReactMarkdown from 'react-markdown';
import FadeIn from '../../global/animations/FadeIn';
import SlideInLeft from '../../global/animations/SlideInLeft';
import SlideInRight from '../../global/animations/SlideInRight';

function Hero({apiData}) {
    // const [isVisible, setIsVisible] = useState(false);
    // const [inView, setInview] = useState(false);
    // const containerRef = useRef(null);
    const data = apiData ? apiData.data.attributes : null;

    const videoImgdata = data ? data.heroImgVideo.data.attributes : null;
    
    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.8 // Intersection threshold
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 observer.unobserve(entry.target); // Stop observing once the element is visible
    //             }
    //         });
    //     }, options);

    //     if (containerRef.current) {
    //         observer.observe(containerRef.current);
    //     }

        

    //     return () => {
    //         if (containerRef.current) {
    //             observer.unobserve(containerRef.current);
    //         }
    //     };
    // }, []);




    return (
        <div className={styles.flexContainer} id="introductie">
            <div className={styles.introContainer}>

                <SlideInLeft delay={100}>
                    <h1 className={`gradientText ${styles.name}`}>
                        {data !== null ? data.firstName : ""}
                    </h1>

                </SlideInLeft>


                <SlideInRight delay={400}>
                    <h1 className={`gradientText ${styles.name} ${styles.lastName}`}>{data !== null ? data.lastName : ""}</h1>

                </SlideInRight>
            
                <FadeIn delay={600}>
                    <TypeWriterEffect />
                    

                    {data && <ReactMarkdown>{data.shortIntro}</ReactMarkdown>}


                    <div className={styles.btnsContainer}>
                        <a href={"#contact"} className='primairBtnLink'>
                            <PrimaryBtn text={'Neem contact op'}/>
                        </a>
                    </div>

                </FadeIn>
            </div>

            {/* animated.div component for the image or video*/}
            <FadeIn delay={600}>
                <div className={styles.imgContainer}>
                    {
                        videoImgdata !== null ?
                            videoImgdata.ext.match(/\.(jpg|jpeg|png|gif)$/i) ?
                            
                            <img src={`${process.env.REACT_APP_API_ROOT_URL}${videoImgdata.url}`} alt={videoImgdata.alternativeText}/>

                            :

                            <video autoPlay loop muted playsInline>
                                <source src={`${process.env.REACT_APP_API_ROOT_URL}${videoImgdata.url}`} type={videoImgdata.mime}/>
                            </video>
                        :
                        <></>
                    }
                    
                </div>

            </FadeIn>
            
        </div>
    );
}

export default Hero;

import React, { useEffect, useRef, useState } from 'react';
import styles from "./personalInfo.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import AvatarCanvas from '../../global/avatar/avatarCanvas/AvatarCanvas';
import { useSpring, animated } from '@react-spring/web';
import ReactMarkdown from 'react-markdown'; 

function PersonalInfo({apiData}) {

    const [isVisible, setIsVisible] = useState(false);
    const [techData, setTechData] = useState([]);
    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);

    const data = apiData ? apiData.data.attributes : null;

    // Calculate my age
    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const now = new Date();
      
        let age = now.getFullYear() - dob.getFullYear();
        
        // Adjust age if birthday hasn't occurred yet this year
        if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
          age--;
        }
        
        return age;
    }


    const getTechData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/technologies?filters[stillRemember][$eq]=true&populate=*`);
        const json = await resp.json();

        setTechData(json.data.map(item => {
            if(item.attributes.logoImage.data !== null){
                return {
                    name: item.attributes.name, 
                    logoClassname: item.attributes.logoClassname,
                    logoImg: {
                        url: item.attributes.logoImage.data.attributes.url,
                        alt: item.attributes.logoImage.data.attributes.alternativeText
                    }
                }
            }else{
                return {
                    name: item.attributes.name, 
                    logoClassname: item.attributes.logoClassname,
                    logoImg: null
                }
            }
        }));

    }

     
      
      useEffect(() => {
        getTechData();
      }, []);


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
                            <p className={styles.name}>{data? data.firstName : ""}{window.innerWidth > 600 ? " " : "\n"}{data? data.lastName : ""}</p>

                        </div>

                        <div>
                            <h5>Leeftijd:</h5>
                            <p>{data? calculateAge(data.dateOfBirth) : ""}</p>
                        </div>

                        <div>
                            <h5>Land:</h5>
                            <p>{data? data.country : ""}</p>
                        </div>
                    </div>

                </animated.div>


                <animated.div className={styles.personalDataInfo} style={personalDataInfo}  ref={secondContainerRef}>
                    <div className={styles.personalDataInfoHeader}>
                        <h3 className='gradientText'>Info</h3>
                    </div>
                    <div className={styles.personalDataInfoContent}>

                        {data && <ReactMarkdown>{data.InfoBulletpoints}</ReactMarkdown>}
                    </div>
                </animated.div>


                <animated.div className={styles.personalDataInfo} style={skills}  ref={thirdContainerRef}>
                    <div className={styles.personalDataInfoHeader}>
                        <h3 className='gradientText'>Skills</h3>
                    </div>
                    <div className={`${styles.personalDataInfoContent} ${styles.skillsContainer}`}>
                        <div className={styles.grid}>
                            {techData.map((tech, i)=> {
                                if(tech.logoClassname !== "" && tech.logoImg === null){
                                    return (
                                        <div key={i}>
                                            <i className={tech.logoClassname}></i>
                                            <p>{tech.name}</p>
                                        </div>
                                    );
                                }else{
                                    return (
                                        <div key={i}>
                                            <div className={styles.techImgContainer}>
                                                <img src={`${process.env.REACT_APP_API_ROOT_URL}${tech.logoImg.url}`} alt={tech.logoImg.alt} />
                                            </div>
                                            <p>{tech.name}</p>
                                        </div>
                                    )
                                }
                                
                            })}
                            
                        </div>
                    </div>
                </animated.div>
                
                {(data !== null && data.cv.data !== null) && 
                
                    <div className={styles.cvBtnContainer}>
                        <a href={`${process.env.REACT_APP_API_ROOT_URL}${data.cv.data.attributes.url}`} rel="noreferrer" target="_blank">
                            <PrimaryBtn text={"Bekijk mijn CV"}/>
                        </a>
                    </div>
                }
                
        

            </div>

            <div className={styles.canvas3D}>
                <AvatarCanvas/>
            </div>
            
        </div>
    );
}

export default PersonalInfo;
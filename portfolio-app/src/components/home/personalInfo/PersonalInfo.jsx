import React, { useContext, useEffect, useState } from 'react';
import styles from "./personalInfo.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import AvatarCanvas from '../../global/avatar/avatarCanvas/AvatarCanvas';
import ScaleUp from '../../global/animations/ScaleUp';
import ModelLoadingContext from '../../../contexts/ModelLoadingContext';
import ReactMarkdown from 'react-markdown';
import { Waypoint } from 'react-waypoint';

function PersonalInfo({ apiData }) {
    const [techData, setTechData] = useState([]);
    const { isModelLoaded } = useContext(ModelLoadingContext);
    const [isSticky, setIsSticky] = useState(false);

    const data = apiData ? apiData.data.attributes : null;

    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const now = new Date();

        let age = now.getFullYear() - dob.getFullYear();

        if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }

    const getTechData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/technologies?filters[stillRemember][$eq]=true&populate=*`);
        const json = await resp.json();

        setTechData(json.data.map(item => {
            if (item.attributes.logoImage.data !== null) {
                return {
                    name: item.attributes.name,
                    logoClassname: item.attributes.logoClassname,
                    logoImg: {
                        url: item.attributes.logoImage.data.attributes.url,
                        alt: item.attributes.logoImage.data.attributes.alternativeText
                    }
                }
            } else {
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

    return (
        <div className={styles.flexContainer}>
            <div className={styles.infoContainer}>
                {isModelLoaded && (
                    <div>
                        <Waypoint onEnter={() => setIsSticky(true)} onLeave={() => setIsSticky(false)}>
                            <div>
                                <ScaleUp delay={100} bounceNeeded={false}>
                                    <div className={styles.personalDataHeader}>
                                        <div className={styles.personalDataHeaderContent}>
                                            <div>
                                                <h5>Naam:</h5>
                                                <p className={styles.name}>{data ? data.firstName : ""}{window.innerWidth > 600 ? " " : "\n"}{data ? data.lastName : ""}</p>
                                            </div>
                                            <div>
                                                <h5>Leeftijd:</h5>
                                                <p>{data ? calculateAge(data.dateOfBirth) : ""}</p>
                                            </div>
                                            <div>
                                                <h5>Land:</h5>
                                                <p>{data ? data.country : ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScaleUp>

                                <ScaleUp delay={100} bounceNeeded={false}>
                                    <div className={styles.personalDataInfo}>
                                        <div className={styles.personalDataInfoHeader}>
                                            <h3 className='gradientText'>Info</h3>
                                        </div>
                                        <div className={styles.personalDataInfoContent}>
                                            {data && <ReactMarkdown>{data.InfoBulletpoints}</ReactMarkdown>}
                                        </div>
                                    </div>
                                </ScaleUp>

                                <ScaleUp delay={100} bounceNeeded={false}>
                                    <div className={styles.personalDataInfo}>
                                        <div className={styles.personalDataInfoHeader}>
                                            <h3 className='gradientText'>Skills</h3>
                                        </div>
                                        <div className={`${styles.personalDataInfoContent} ${styles.skillsContainer}`}>
                                            <div className={styles.grid}>
                                                {techData.map((tech, i) => {
                                                    if (tech.logoClassname !== "" && tech.logoImg === null) {
                                                        return (
                                                            <div key={i}>
                                                                <i className={tech.logoClassname}></i>
                                                                <p>{tech.name}</p>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div key={i}>
                                                                <div className={styles.techImgContainer}>
                                                                    <img src={`${process.env.REACT_APP_API_ROOT_URL}${tech.logoImg.url}`} alt={tech.logoImg.alt} />
                                                                </div>
                                                                <p>{tech.name}</p>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </ScaleUp>
                            </div>
                        </Waypoint>

                        {(data !== null && data.cv.data !== null) &&
                            <div className={styles.cvBtnContainer}>
                                <ScaleUp bounceNeeded={true}>
                                    <a href={`${process.env.REACT_APP_API_ROOT_URL}${data.cv.data.attributes.url}`} rel="noreferrer" target="_blank" className='primairBtnLink'>
                                        <PrimaryBtn text={"Bekijk mijn CV"} />
                                    </a>
                                </ScaleUp>
                            </div>
                        }
                    </div>
                )}
            </div>
            <div className={`${styles.canvas3D} ${isSticky ? styles.stickyCanvas : styles.bottomCanvas}`}>
                
                <AvatarCanvas />
                
            </div>
        </div>
    );
}

export default PersonalInfo;

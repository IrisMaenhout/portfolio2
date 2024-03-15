import React, { useEffect, useState } from 'react';
import styles from "./personalInfo.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import AvatarCanvas from '../../global/avatar/avatarCanvas/AvatarCanvas';

function PersonalInfo(props) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.infoContainer}>
                
                {/* c:\Users\irism\Downloads\headerBoxPersonalData.svg */}
                <div className={styles.personalDataHeader}>
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

                </div>


                <div className={styles.personalDataInfo}>
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
                </div>


                <div className={styles.personalDataInfo}>
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
                </div>

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
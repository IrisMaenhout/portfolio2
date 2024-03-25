import React, { useState, useEffect } from 'react';
import styles from "./usedTechnologies.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';

function UsedTechnologies({projectId}) {

    const [isOpen, setIsOpen] = useState(false);
    const [usedTechnologiesArray, setUsedTechnologiesArray] = useState([]);

    function toggleIsOpen() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    // localhost:1337/api/projects?populate[usedTechnologies][populate][0]=logoImage

    const getTechData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects/${projectId}?populate[usedTechnologies][populate][0]=logoImage`);
        const json = await resp.json();

        setUsedTechnologiesArray(json.data.attributes.usedTechnologies.data);
    }

      
    useEffect(() => {
        getTechData();
    }, []);

    if(!isOpen){
        return (
            <div className={styles.clossedTechnologiesContainer}>
                <div>
                    <i className="fa-solid fa-laptop-code"></i>
                    <p>Overzicht van alle gebruikte technologieën</p>
                </div>

                <PrimaryBtn className={styles.openBtn} text={'Bekijk'} actionOnClickFunc={toggleIsOpen}/>
                
            </div>
        );
    }else{
        return (
            <div className={styles.openTechnologiesContainer}>
                <div className={styles.topContainer}>
                    <h2 className='gradientText'>Overzicht van alle gebruikte technologieën</h2>

                    <button onClick={toggleIsOpen}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className={`${styles.technologiesContainer} ${styles.grid}`}>

                    {/* {
                        usedTechnologiesArray.map((image, index) => (
                            <div
                              key={index}
                              className={styles.technology}
                            >
                              <img src={image} alt={`name`} />
                            </div>
                        ))
                    } */}


                    {usedTechnologiesArray.map((tech, i)=> {
                        // console.log("tech", tech);
                        // console.log("logoIMg", tech.attributes.logoImage);
                        // console.log("url", tech.attributes.logoImage.data?.attributes.url);
                        if(tech.attributes.logoClassname !== "" && tech.attributes.logoImage.data === null){
                            return (
                                <div key={`used-tech-${i}`}>
                                    <i className={tech.attributes.logoClassname}></i>
                                    <p>{tech.attributes.name}</p>
                                </div>
                            );
                        }else{
                            return (
                                <div key={`used-tech-${i}`}>
                                    <div className={styles.techImgContainer}>
                                        <img src={`${process.env.REACT_APP_API_ROOT_URL}${tech.attributes.logoImage.data.attributes.url}`} alt={tech.attributes.logoImage.data.attributes.alternativeText} />
                                    </div>
                                    <p>{tech.attributes.name}</p>
                                </div>
                            )
                        }
                                
                    })}
                </div>
            </div>
        )
    }
    
}

export default UsedTechnologies;
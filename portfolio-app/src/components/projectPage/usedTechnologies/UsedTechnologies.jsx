import React, { useState } from 'react';
import styles from "./usedTechnologies.module.css";
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';

function UsedTechnologies({usedTechnologiesArray}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

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
                    <h2 className='title'>Overzicht van alle gebruikte technologieën</h2>

                    <button onClick={toggleIsOpen}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className={styles.technologiesContainer}>

                    {
                        usedTechnologiesArray.map((image, index) => (
                            <div
                              key={index}
                              className={`${styles.technology}`}
                            >
                              <img src={image} alt={`name`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}

export default UsedTechnologies;
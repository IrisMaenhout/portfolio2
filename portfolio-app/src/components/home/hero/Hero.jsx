import React from 'react';
import styles from './hero.module.css';
import PrimaryBtn from '../../global/btns/primary/PrimaryBtn';
import SecondaryBtn from '../../global/btns/secondary/SecondaryBtn';

function Hero(props) {
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="" />
            </div>


            <div>
                <h1 className={`gradient-text ${styles.name}`}>Iris Maenhout</h1>
                <p className={styles.jobTitle}>UX/UI designer, front-end developer & full stack development</p>

                <p>
                    Ik ben 22 jaar en ik ben een student die de opleiding grafische en digitale media (bachelor) volgt met als keuzetraject New media development aan de Artevelde hogeschool in Gent. Ik heb een passie voor het creëren van webapplicaties die een mooie en gebruiksvriendelijke interfase hebben.
                </p>

                <div className={styles.btnsContainer}>
                    <SecondaryBtn text={'Cv downloaden'} location={'/somewhere'}/>
                    <PrimaryBtn text={'Contact'}/>
                </div>

            </div>

            
        </div>
    );
}

export default Hero;
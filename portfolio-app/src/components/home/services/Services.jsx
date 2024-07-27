import React from 'react';
import styles from "./services.module.css";
import SlideUp from '../../global/animations/SlideUp';

function Services({servicesData}) {

    if(servicesData !== null && servicesData.length > 1){
    
        let visibleServices = servicesData.filter((service) => {
            return service.attributes.hideService === false;
        });

        if(visibleServices.length > 1){
            return (
                <div className={styles.services} id="diensten">
                    <h2 className='gradientText'>Diensten</h2>
        
                    <div className={`${styles.servicesContainer} ${visibleServices.length > 2 ? styles.threeOrMoreServices : styles.twoServices}`}>
                        {
                            visibleServices.map((service, i) => {
                                return (
                                    <SlideUp bounceNeeded={false} delay={(i + 1) * 200}>
                                        <div key={`service-${i}`} className={styles.service}>
                                            {
                                                service.attributes.iconClassname !== null ?
                                                <i className={service.attributes.iconClassname}></i>
                                                : 
                                                <span className={styles.imgService}>
                                                    <img src={`${process.env.REACT_APP_API_ROOT_URL}${service.attributes.iconImg.data.attributes.url}`} alt={service.attributes.iconImg.data.attributes.alternativeText} />
                                                </span>
                                            }
                                            
                                            <h4>{service.attributes.name}</h4>
                                        </div>

                                    </SlideUp>
                                    
                                )
                            })
                        }
                        
                    </div>
                </div>
            );
        }else{
            return <div className={styles.services}></div>
        }

    }else{
        return <div className={styles.services}></div>
    }
    
}

export default Services;
import React from 'react';
import styles from "./services.module.css";

function Services({servicesData}) {

    if(servicesData !== null && servicesData.length > 1){
    
        let visibleServices = servicesData.filter((service) => {
            return service.attributes.hideService === false;
        });

        if(visibleServices.length > 1){
            return (
                <div className={styles.services} id="diensten">
                    <h2 className='gradientText'>Diensten</h2>
        
                    <div className={styles.servicesContainer}>
                        {
                            visibleServices.map((service, i) => {
                                return (
                                    <div key={`service-${i}`}>
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
import React, { useEffect, useRef, useState } from 'react';
import styles from './technologiesSlider.module.css';

function TechnologiesSlider({images}) {

        const sliderRef = useRef(null);

        const nextSlide = () => {
        
            if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth === sliderRef.current.scrollWidth) {
              // If at the end, reset scroll position to the beginning
              sliderRef.current.scrollLeft = 0;
            } else {
              // Otherwise, scroll to the next position
              sliderRef.current.scrollLeft += 500;
            }
  
          
        };


        const handleDrag = () => {

        }
      
        useEffect(() => {
          const interval = setInterval(nextSlide, 2000); // Change image every 3 seconds
          return () => clearInterval(interval); // Cleanup on unmount
        }, []);
      
        return (
          <div className={styles.sliderContainer} ref={sliderRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.imageSlide}`}
              >
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        );
}

export default TechnologiesSlider;
import React, { useRef, useState } from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';
import hoverVideo from './testProjectHover.mp4';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import hoverVideo from './testHoverVideo.json';


function ProjectCard({className, projectData}) {
    const projectCardData = projectData.attributes;
    console.log(window.innerWidth);

    const [cardHover, setCardHover] = useState(false);

    const videoHoverRef = useRef(null);

    return (


        <Link 
            to={`/projecten/${projectCardData.slug}`} 
            className={styles.card}
            onMouseEnter={() => {
                setCardHover(true);
                videoHoverRef.current.play();
            }}
            onMouseLeave={() => {
                setCardHover(false);
                videoHoverRef.current.pause();
                videoHoverRef.current.currentTime = 0;
            }} 
        >

            
                <div className={`${styles.projectCardhoverImg} ${cardHover && window.innerWidth > 600 ? styles.show : styles.hide}`} >
                    <div className={styles.parentHoverContainer}>
                        <video muted loop preload='auto' className={styles.hoverVideo} ref={videoHoverRef}>
                            <source src={hoverVideo} type="video/mp4"/>
                        </video>
                        
                        <svg preserveAspectRatio="none" viewBox="0 0 645 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <path d="M643 647.5H1.5V41L44.5 2H609L643 41V647.5Z" stroke="#3531C8" strokeWidth="4" strokeLinejoin="round" height="80"/>
                                
                        </svg>

                    
                        
                    </div>
                

                </div>

                

                <div className={`${styles.image} ${!cardHover || window.innerWidth < 600 ? styles.show : styles.hide}`} style={{ backgroundImage: `url(${process.env.REACT_APP_API_ROOT_URL}${projectCardData.coverImage.data.attributes.url})` }}>

                </div>
            
            

            <div className={styles.projectCardhoverContent} >
                <div className={styles.cardContent}>
                    <h3>{projectCardData.title}</h3>
                    <p>{projectCardData.shortIntroProjectCard}</p>
                    <div className={styles.categoryHashtags}>
                        {
                            projectCardData.projectCategories.data.map((category, i)=>(
                                <i key={`category-hashtags-${i}`}>#{category.attributes.name}</i>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
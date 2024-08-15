import React, { useRef, useState } from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';
import { isFirefox } from 'react-device-detect';

function ProjectCard({ className, projectData }) {
    const projectCardData = projectData.attributes;

    const [cardHover, setCardHover] = useState(false);
    const videoHoverRef = useRef(null);
    const hoverTimeoutRef = useRef(null); // Ref to store the timeout ID

    const handleMouseEnter = () => {
        // Set a timeout to change the cardHover state after a delay (e.g., 2 seconds)
        hoverTimeoutRef.current = setTimeout(() => {
            setCardHover(true);
            videoHoverRef.current.play();
        }, 200); // Adjust the delay as needed (2000ms = 2 seconds)
    };

    const handleMouseLeave = () => {
        // Clear the timeout if the user leaves early
        clearTimeout(hoverTimeoutRef.current);
        setCardHover(false);
        videoHoverRef.current.pause();
        videoHoverRef.current.currentTime = 0;
    };

    return (
        <Link
            to={`/projecten/${projectCardData.slug}`}
            className={`${styles.card} ${cardHover && styles.cardHover} ${isFirefox ? styles.onFirefox : styles.onOtherBrowsers}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${styles.projectCardhoverImg} ${cardHover && window.innerWidth > 600 ? styles.show : styles.hide}`}>
                <div className={styles.parentHoverContainer}>
                    <video muted loop preload='auto' className={styles.hoverVideo} ref={videoHoverRef}>
                        <source src={`${process.env.REACT_APP_API_ROOT_URL}${projectCardData.hoverVideo.data.attributes.url}`} type={projectCardData.hoverVideo.data.attributes.mime} />
                    </video>
                    <svg preserveAspectRatio="none" viewBox="0 0 645 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M643 647.5H1.5V41L44.5 2H609L643 41V647.5Z" stroke="#3531C8" strokeWidth="4" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className={`${styles.image} ${!cardHover || window.innerWidth < 600 ? styles.show : styles.hide}`} style={{ backgroundImage: `url(${process.env.REACT_APP_API_ROOT_URL}${projectCardData.coverImage.data.attributes.url})` }}>
            </div>

            <div className={styles.projectCardhoverContent}>
                <div className={styles.cardContent}>
                    <h3>{projectCardData.title}</h3>
                    <p>{projectCardData.shortIntroProjectCard}</p>
                    <div className={styles.categoryHashtags}>
                        {projectCardData.projectCategories.data.map((category, i) => (
                            <i key={`category-hashtags-${i}`}>#{category.attributes.name}</i>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;

import React, { useState } from 'react';
import styles from './projectCard.module.css';
import { Link } from 'react-router-dom';

function ProjectCard({className, projectData}) {
    const projectCardData = projectData.attributes;

    const [cardHover, setCardHover] = useState(false);

    return (


        <Link 
            to={`/projecten/${projectCardData.slug}`} 
            className={styles.card}
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)} 
        >
            <div className={styles.projectCardhoverImg} >
                {
                    cardHover && 

                    <svg preserveAspectRatio="none" viewBox="0 0 645 649" fill={projectCardData.coverImgBackgroundHexColor} xmlns="http://www.w3.org/2000/svg">
                        <path d="M643 647.5H1.5V41L44.5 2H609L643 41V647.5Z" stroke="#3531C8" strokeWidth="4" strokeLinejoin="round"/>
                    </svg>

                }

                <div className={styles.image} style={{ backgroundImage: `url(${process.env.REACT_APP_API_ROOT_URL}${projectCardData.coverImage.data.attributes.url})`, backgroundColor:`${projectCardData.coverImgBackgroundHexColor}` }}>
                    <div className={styles.btns}>
                        {((!projectCardData.hideWebsiteUrlOnDesktop && window.innerWidth > 600) || (!projectCardData.hideWebsiteUrlOnMobile && window.innerWidth < 600)) && projectCardData.projectUrls.liveSiteUrl !== null &&

                        <a href={`${projectCardData.projectUrls.liveSiteUrl}`} target='_blank' className={styles.websiteLink} rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                        }
                        
                        <Link to={`/projecten/${projectCardData.slug}`} className={styles.readMoreLink}><i className="fa-solid fa-right-long"></i></Link>
                    </div>
                </div>
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
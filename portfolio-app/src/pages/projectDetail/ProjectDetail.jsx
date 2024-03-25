import React, { useEffect, useState } from 'react';
import FsLightbox from "fslightbox-react";

import styles from './projectDetail.module.css';
import CategoryBtn from '../../components/global/btns/categoryBtn/CategoryBtn';
import UsedTechnologies from '../../components/projectPage/usedTechnologies/UsedTechnologies';
import WebsiteExtraInfoBtn from '../../components/global/btns/websiteExtraInfoBtn/WebsiteExtraInfoBtn';
import InANutshell from '../../components/projectPage/inANutshell/InANutshell';
import Video from '../../components/global/video/Video';
import Cta from '../../components/global/cta/Cta';
import PrevNextProject from '../../components/projectPage/prevNextProject/PrevNextProject';
import { Link, useParams } from 'react-router-dom';
import PageNotFound from '../pageNotFound/PageNotFound';
import ReactMarkdown from 'react-markdown'; 

function ProjectDetail({personalInfo}) {
    // To open the lightbox change the value of the "toggler" prop.
	// const [lightBoxToggle, setLightBoxToggle] = useState(false);

    console.log(personalInfo);

    const [projectData, setProjectData] = useState(null);
    const [projectContentData, setProjectContentData] = useState(null);

    const {projectSlug} = useParams();


    const getProjectData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects?filters[slug][$eq]=${projectSlug}&populate=*`);
        const json = await resp.json();

        setProjectData(json.data);
    }

    const getProjectContentData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects?filters[slug][$eq]=${projectSlug}&populate[projectContent][on][project-info.files][populate][imagesVideos][populate][0]=imageVideo&populate[projectContent][on][project-info.description][populate]=*`);
        const json = await resp.json();

        setProjectContentData(json.data[0].attributes.projectContent);
    }

      
    useEffect(() => {
        getProjectData();
        getProjectContentData();
    }, []);


    console.log(projectData);
    console.log(projectContentData);


    const imageSources = [];

    projectData && imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data?.attributes.url}`);

    projectData && imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data?.attributes.url}`);

    // Iterate over the projectContentData to extract the image URLs
    projectContentData?.forEach((content) => {
        if (content.__component === "project-info.files") {
            content.imagesVideos.forEach((imgVideo) => {
                imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data?.attributes.url}`);
            });
        }
    });

    console.log(imageSources);

    const [lightboxController, setLightboxController] = useState({
		toggle: false,
		slide: 1
	});

    function openLightboxOnSlide(number) {
        setLightboxController((prevLightboxController)=>{
            return {
                toggle: !prevLightboxController.toggle,
                slide: number
            }
        });
	}

    function convertToSlug(string) {
        return string.trim().toLowerCase().replace(/\s+/g, '-');
    }

    // function toggleLightBox (){
    //     setLightBoxToggle(prevLightBoxToggle => !prevLightBoxToggle);
    // }
    if(projectData !== null){
        if(projectData.length > 0){

            return (
                <>
                    <div className={`container`}>
                        <div className={styles.topInfo}>
                            <h1 className={`gradientText`}>{projectData[0].attributes.title}</h1>
        
                            <div className={styles.categories}>
                                {   
                                    personalInfo!== null &&
                                    (personalInfo.data.attributes.useCategoryFilterProjects ?
                                    projectData[0].attributes.projectCategories.data.map((category, index)=>(
                                        <CategoryBtn key={`project-category-${index}`} location={`/${convertToSlug(category.attributes.name)}`} text={category.attributes.name}/>
                                    ))

                                    : 
                                    
                                    projectData[0].attributes.projectCategories.data.map((category, index)=>(
                                        <div key={`project-category-${index}`} className={styles.disabledCategory}>
                                            {category.attributes.name}
                                        </div>
                                    )))
                                    
                                }
        
                            </div>
                        </div>
        
                        <div className={projectData[0].attributes.hideWebsiteUrlOnDesktop || projectData[0].attributes.hideWebsiteUrlOnMobile ? styles.deviceImgContainer : styles.devicesImagesContainer}>
                            {projectData[0].attributes.DetailPageDesktopImg.data !== null &&

                                <img 
                                    src={`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data.attributes.url}`} 
                                    alt={projectData[0].attributes.DetailPageDesktopImg.data.attributes.alternativeText} 
                                    className={styles.desktopImg} 
                                    onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data?.attributes.url}`) +1)}
                                />
                            }

                            {projectData[0].attributes.DetailPagePhoneImg.data !== null &&

                                <img 
                                    src={`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data.attributes.url}`} 
                                    alt={projectData[0].attributes.DetailPagePhoneImg.data.attributes.alternativeText} 
                                    className={styles.phoneImg}
                                    onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data?.attributes.url}`) +1)}
                                />
                            }
                        </div>


                        <div className={styles.externalLinksContainer}>
                            {((!projectData[0].attributes.hideWebsiteUrlOnDesktop && window.innerWidth > 600) || (!projectData[0].attributes.hideWebsiteUrlOnMobile && window.innerWidth < 600)) && projectData[0].attributes.projectUrls.liveSiteUrl !== null &&

                                <WebsiteExtraInfoBtn iconClassName={'fi fi-rr-globe'} text={'Bekijk\nlive website'} location={projectData[0].attributes.projectUrls.liveSiteUrl}/>
                            }

                            {
                                projectData[0].attributes.projectUrls.githubUrl !== null &&
                                    <WebsiteExtraInfoBtn iconClassName={'fa-brands fa-github'} text={'Bekijk\ngithub'} location={projectData[0].attributes.projectUrls.githubUrl}/> 
                            }

                            {
                                projectData[0].attributes.projectUrls.designFileUrl !== null &&
                                    <WebsiteExtraInfoBtn iconClassName={'fi fi-rs-pencil-paintbrush'} text={'Bekijk\ndesign'} location={projectData[0].attributes.projectUrls.designFileUrl}/>
                            }
                        </div>
        
                        <UsedTechnologies projectId={projectData[0].id}/>
        
                        {
                            projectData[0].attributes.basicDescription &&
                            <>
                                <h2 className={`gradientText`}>Briefing</h2>
                                <ReactMarkdown>{projectData[0].attributes.basicDescription}</ReactMarkdown>
                            </>
                        }
                        
        
        
                        
        
                        {/* <InANutshell/> */}
        
                    </div>
    


                    <div className={`container ${styles.imagesContainer}`}>
                        {projectContentData?.length > 0 &&
                            projectContentData.map((content, index) => {
                                if (content.__component === "project-info.files") {
                                    return content.imagesVideos.map((imgVideo, i) => (
                                        <>
                                            {imgVideo.showProcessTitle === true && <h2 className={`gradientText ${styles.processTitle}`}>Process</h2>}


                                            <div
                                                className={imgVideo.ImgVideoSize === "big" ? styles.bigImgVideo : styles.mediumImgVideo}
                                                onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data.attributes.url}`) +1)} // Adjust slide number
                                                key={`project-img-${i}`}
                                            >
                                                {imgVideo.imageVideo.data.attributes.ext.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                                                    <img
                                                        src={`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data?.attributes.url}`}
                                                        alt={imgVideo.imageVideo.data?.attributes.alternativeText}
                                                    />
                                                ) : (
                                                    <video autoPlay loop muted playsInline>
                                                        <source
                                                            src={`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data?.attributes.url}`}
                                                            type={imgVideo.imageVideo.data?.attributes.mime}
                                                        />
                                                    </video>
                                                )}
                                            </div>
                                        </>
                                        
                                    ));
                                } else {
                                    return (
                                        <>
                                            {content.showProcessTitle === true && <h2 className={`gradientText`}>Process</h2>}

                                            <div
                                                className={content.width === "width-100%" ? styles.bigImgVideo : styles.mediumImgVideo}
                                                key={`project-info-text-${index}`}
                                            > 
                                                <ReactMarkdown>{content.informationText}</ReactMarkdown>
                                            </div> 
                                        </>
                                        
                                    )
                                }
                            })}
                    </div>

        
        
                    <div className='container'>
                        <Cta ctaText={'Vind je dit een interessant project en wil je graag samenwerken?'} url={'/#contact'} btnText={'Stuur mij een berichtje'}/>
        
                        <PrevNextProject 
                            currentProjectId={projectData[0].id}
                        />
                    </div>
        
                    {/* ________________ Lightbox _____________________ */}
                    <FsLightbox
                        toggler={lightboxController.toggle}
                        sources={imageSources}
                        slide={lightboxController.slide}
                    />
                </>
                    
            );

        }else{
            return <PageNotFound />
        }
    }
}

export default ProjectDetail;
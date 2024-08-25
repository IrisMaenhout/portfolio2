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
import SlideInLeft from '../../components/global/animations/SlideInLeft';
import ScaleUpWhileScrolling from '../../components/global/animations/ScaleUpWhileScrolling';
import ScaleUp from '../../components/global/animations/ScaleUp';
import SlideUp from '../../components/global/animations/SlideUp';
import FadeIn from '../../components/global/animations/FadeIn';

function ProjectDetail({personalInfo}) {
    // To open the lightbox change the value of the "toggler" prop.
	// const [lightBoxToggle, setLightBoxToggle] = useState(false);

    const [projectData, setProjectData] = useState(null);
    const [projectContentData, setProjectContentData] = useState(null);

    const {projectSlug} = useParams();


    const getProjectData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects?filters[slug][$eq]=${projectSlug}&populate=*`);
        const json = await resp.json();

        setProjectData(json.data);
    }

    const getProjectContentData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects?filters[slug][$eq]=${projectSlug}&populate[projectContent][on][project-info.files][populate][imagesVideos][populate][0]=imageVideo&populate[projectContent][on][project-info.files][populate][bigImgOrVideo][populate][0]=imageVideo&populate[projectContent][on][project-info.description][populate]=*`);
        const json = await resp.json();

        json.data[0] !== undefined && setProjectContentData(json.data[0].attributes.projectContent);
    }

      
    useEffect(() => {
        getProjectData();
        getProjectContentData();
    }, []);


    const imageSources = [];

    projectData !== null && projectData.length > 0 && (imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data?.attributes.url}`));

    projectData !== null && projectData.length > 0 && (imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data?.attributes.url}`));

    // Iterate over the projectContentData to extract the image URLs
    projectContentData?.forEach((content) => {
        if (content.__component === "project-info.files") {
            // Bento grid images/video's
            content.imagesVideos.forEach((imgVideo) => {
                imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data?.attributes.url}`);
            });
            
            // Big images/video's
            imageSources.push(`${process.env.REACT_APP_API_ROOT_URL}${content.bigImgOrVideo.imageVideo.data?.attributes.url}`);
            
        }
    });

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
                            <SlideUp delay={200}>
                                <h1 className={`gradientText`}>{projectData[0].attributes.title}</h1>
                            </SlideUp>

                            <FadeIn delay={400}>
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
                            </FadeIn>
        
                            
                        </div>
        
                        <div className={projectData[0].attributes.hideWebsiteUrlOnDesktop || projectData[0].attributes.hideWebsiteUrlOnMobile ? styles.deviceImgContainer : styles.devicesImagesContainer}>
                            {projectData[0].attributes.DetailPageDesktopImg.data !== null &&
                                <ScaleUpWhileScrolling delay={400}>
                                    <img 
                                        src={`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data.attributes.url}`} 
                                        alt={projectData[0].attributes.DetailPageDesktopImg.data.attributes.alternativeText} 
                                        className={styles.desktopImg} 
                                        onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPageDesktopImg.data?.attributes.url}`) +1)}
                                    />
                                </ScaleUpWhileScrolling>
                                
                            }

                            {projectData[0].attributes.DetailPagePhoneImg.data !== null &&
                                <ScaleUpWhileScrolling delay={400}>
                                    <img 
                                    src={`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data.attributes.url}`} 
                                    alt={projectData[0].attributes.DetailPagePhoneImg.data.attributes.alternativeText} 
                                    className={styles.phoneImg}
                                    onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${projectData[0].attributes.DetailPagePhoneImg.data?.attributes.url}`) +1)}
                                />

                                </ScaleUpWhileScrolling>
                                
                            }
                        </div>


                        
                        {/* <SlideUp bounceNeeded={false} delay={200}> */}
                            <UsedTechnologies projectId={projectData[0].id}/>
                        {/* </SlideUp> */}
                        {
                            projectData[0].attributes.basicDescription &&
                            <>
                                <h2 className={`gradientText`}>Over dit project</h2>
                                <ReactMarkdown>{projectData[0].attributes.basicDescription}</ReactMarkdown>
                            </>
                        }
                        
                        
                        <div className={styles.externalLinksContainer}>
                            {
                                [
                                    { url: projectData[0].attributes.projectUrls.liveSiteUrl, icon: 'fi fi-rr-globe', text: 'Bekijk\nlive website' },
                                    { url: projectData[0].attributes.projectUrls.githubUrl, icon: 'fa-brands fa-github', text: 'Bekijk\ngithub' },
                                    { url: projectData[0].attributes.projectUrls.designFileUrl, icon: 'fi fi-rs-pencil-paintbrush', text: 'Bekijk\ndesign' }
                                ]
                                .filter(link => link.url !== null)
                                .map((link, index) => (
                                    <ScaleUp key={`WebsiteExtraInfoBtn${index}`} delay={400 + index * 200}>
                                        <WebsiteExtraInfoBtn iconClassName={link.icon} text={link.text} location={link.url} />
                                    </ScaleUp>
                                ))
                            }
                        </div>


                        {/* <InANutshell/> */}
        
                    </div>

    


                    {/* <div className={`container ${styles.imagesContainer}`}>
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
                    </div> */}



                    {projectContentData?.length > 0 &&
                            projectContentData.map((content, index) => {

                                // Check if there are multiple images or video's for the bento grid
                                if (content.__component === "project-info.files") {
                                    // Check if the imagesVideos has content inside
                                    if(content.imagesVideos.length > 0){
                                        return (
                                            <div className={`container ${styles.bentoGrid} ${styles.flexibleContent}`}>
                                                { content.imagesVideos.map((imgVideo, i) => (
                                                    <div
                                                        style={{gridColumn: `span ${imgVideo.gridSizeHorizontal}`, gridRow: `span ${imgVideo.gridSizeVertical}`}}
                                                        onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${imgVideo.imageVideo.data.attributes.url}`) +1)} 
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
                                                ))}
                                            </div>
                                        );
                                    }
                                
                                    // Check if there is a big image or video
                                    if(content.bigImgOrVideo !== null){
                                        console.log(content.bigImgOrVideo.isFullWidthViewport)
                                        return (
                                            <div className={`${styles.flexibleContent} ${content.bigImgOrVideo.isFullWidthViewport ? styles.fullViewportWidth : "container"}`}>
                                                <div 
                                                    className={styles.bigMedia}
                                                    onClick={() => openLightboxOnSlide(imageSources.indexOf(`${process.env.REACT_APP_API_ROOT_URL}${content.bigImgOrVideo.imageVideo.data.attributes.url}`) +1)} 
                                                >
                                                {content.bigImgOrVideo.imageVideo.data.attributes.ext.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                                                    <img
                                                        style={{height: content.bigImgOrVideo.height !== null ? content.bigImgOrVideo.height : '100%'}}
                                                        src={`${process.env.REACT_APP_API_ROOT_URL}${content.bigImgOrVideo.imageVideo.data?.attributes.url}`}
                                                        alt={content.bigImgOrVideo.imageVideo.data?.attributes.alternativeText}
                                                    />
                                                ) : (
                                                    <video 
                                                        controls
                                                        playsInline
                                                        style={{height: content.bigImgOrVideo.height !== null ? content.bigImgOrVideo.height : '100%'}}
                                                    >
                                                        <source
                                                            src={`${process.env.REACT_APP_API_ROOT_URL}${content.bigImgOrVideo.imageVideo.data?.attributes.url}`}
                                                            type={content.bigImgOrVideo.imageVideo.data?.attributes.mime}
                                                        />
                                                    </video>
                                                )}
                                                </div>

                                                
                                            </div>
                                        );
                                    }
                                } else {
                                    // If the component is text
                                    return (
                                        

                                            <div
                                                className={`${styles.paragraphTextContainer} ${styles.flexibleContent} ${content.width === "width-100%" ? styles.bigImgVideo : styles.mediumImgVideo} container`}
                                                key={`project-info-text-${index}`}
                                            > 
                                                <ReactMarkdown>{content.informationText}</ReactMarkdown>
                                            </div> 
                                       
                                        
                                    )
                                }
                                
                                return null;
                            })}
                        {/* <div style={{gridColumn: "span 4", gridRow: "span 3"}}>Box 1</div>
                        <div style={{gridColumn: "span 4", gridRow: "span 3"}}>Box 1</div>
                        <div style={{gridColumn: "span 2", gridRow: "span 3"}}>Box 2</div>
                        <div style={{gridColumn: "span 6", gridRow: "span 5"}}>Box 3</div>
                        <div style={{gridColumn: "span 4", gridRow: "span 4"}}>Box 4</div>
                        <div style={{gridColumn: "span 1", gridRow: "span 1"}}>Box 5</div>
                        <div style={{gridColumn: "span 3", gridRow: "span 1"}}>Box 6</div> */}

        
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
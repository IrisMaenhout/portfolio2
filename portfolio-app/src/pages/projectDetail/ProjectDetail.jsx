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

function ProjectDetail(props) {
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
                                <CategoryBtn location={'../?category=ux-ui-design'} text={'UX/UI design'} logoClassName={'fa-solid fa-palette'}/>
        
                                <CategoryBtn location={'../?category=web-development'} text={'Web development'} logoClassName={'fa-solid fa-code'}/>
                                
                                <CategoryBtn location={'../?category=cms-development'} text={'CMS development'} logoClassName={'fa-brands fa-wordpress'}/>
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
        
                        <UsedTechnologies usedTechnologiesArray={['https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg', 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg', 'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg', 'https://static01.nyt.com/images/2023/09/15/multimedia/15UK-DOGS-01-hftk/15UK-DOGS-01-hftk-videoSixteenByNine3000.jpg', 'https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill', 'https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=1xw:0.84375xh;center,top', 'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1650302456.jpeg?crop=0.754xw:1.00xh;0.0651xw,0&resize=1200:*', 'https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZaVrlmpJYvstalJv1T4vWrnQ8cjXqOrnEw&usqp=CAU', 'https://www.hindustantimes.com/ht-img/img/2023/07/10/550x309/labrador-retriever-gfd78b67cf_1280_1677927949246_1688982230758.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1lv8eFXVWmIuzxAoHvWekhW8xB46a479Q&usqp=CAU']}/>
        
                        {
                            projectData[0].attributes.basicDescription &&
                            <>
                                <h2 className={`gradientText`}>Briefing</h2>
                                <ReactMarkdown>{projectData[0].attributes.basicDescription}</ReactMarkdown>
                            </>
                        }
                        
        
        
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
        
                        <InANutshell/>
        
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
                            prevProject={{
                                url: '',
                                name: 'Vorig project'
                            }}
        
                            nextProject={{
                                url: '',
                                name: 'Volgend project'
                            }}
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
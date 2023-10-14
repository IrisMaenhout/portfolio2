import React, { useState } from 'react';
import FsLightbox from "fslightbox-react";

import styles from './projectDetail.module.css';
import CategoryBtn from '../../components/global/btns/categoryBtn/CategoryBtn';
import UsedTechnologies from '../../components/projectPage/usedTechnologies/UsedTechnologies';
import WebsiteExtraInfoBtn from '../../components/global/btns/websiteExtraInfoBtn/WebsiteExtraInfoBtn';
import InANutshell from '../../components/projectPage/inANutshell/InANutshell';
import Video from '../../components/global/video/Video';
import Cta from '../../components/global/cta/Cta';
import PrevNextProject from '../../components/projectPage/prevNextProject/PrevNextProject';

function ProjectDetail(props) {
    // To open the lightbox change the value of the "toggler" prop.
	// const [lightBoxToggle, setLightBoxToggle] = useState(false);

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

    return (
        <>
            <div className={`container`}>
                <div className={styles.topInfo}>
                    <h1 className={`gradient-text`}>Project naam</h1>

                    <div className={styles.categories}>
                        <CategoryBtn location={'../?category=ux-ui-design'} text={'UX/UI design'} logoClassName={'fa-solid fa-palette'}/>

                        <CategoryBtn location={'../?category=web-development'} text={'Web development'} logoClassName={'fa-solid fa-code'}/>
                        
                        <CategoryBtn location={'../?category=cms-development'} text={'CMS development'} logoClassName={'fa-brands fa-wordpress'}/>
                    </div>
                </div>

                <div className={styles.devicesImagesContainer}>
                    <img src="https://s.yimg.com/ny/api/res/1.2/RPpqep57_PY5f34ZwOnqbA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/c73cd750-ed07-11ec-abdf-7b1af5b1e683" alt="" className={styles.desktopImg} onClick={() => openLightboxOnSlide(1)}/>

                    <img src="https://images.unsplash.com/photo-1553179459-4514c0f52f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className={styles.phoneImg} onClick={() => openLightboxOnSlide(2)}/>
                </div>

                <UsedTechnologies usedTechnologiesArray={['https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg', 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg', 'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg', 'https://static01.nyt.com/images/2023/09/15/multimedia/15UK-DOGS-01-hftk/15UK-DOGS-01-hftk-videoSixteenByNine3000.jpg', 'https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill', 'https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=1xw:0.84375xh;center,top', 'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1650302456.jpeg?crop=0.754xw:1.00xh;0.0651xw,0&resize=1200:*', 'https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZaVrlmpJYvstalJv1T4vWrnQ8cjXqOrnEw&usqp=CAU', 'https://www.hindustantimes.com/ht-img/img/2023/07/10/550x309/labrador-retriever-gfd78b67cf_1280_1677927949246_1688982230758.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1lv8eFXVWmIuzxAoHvWekhW8xB46a479Q&usqp=CAU']}/>


                <h2 className={`${styles.titleWithTextUnder}`}>Briefing</h2>
                <p className={styles.autoLayoutText}>Als kinderen geboren worden, is het vaak de gewoonte dat een babylijst opgesteld wordt met handige cadeau's waarmee je de ouders kan plezieren. Vaak bieden winkels (zoals Dreambaby) dit aan als service, maar je bent wel beperkt aan die ene winkel, je kan niet aangeven dat je bij de concurrent iets wil.
                Het doel van deze applicatie is dat ouders een verlanglijst van babyspullen kunnen opstellen onaffhankelijk van welke winkel de spullen afkomstig zijn. Deze lijst kan men dan delen met vrienden en familie die vervolgens kunnen bekijken wat er op de wishlist staat en het artikel aankopen met de mogelijkheid tot het toevoegen van persoonlijke boodschap.</p>


                <div className={styles.externalLinksContainer}>
                    <WebsiteExtraInfoBtn iconClassName={'fi fi-rr-globe'} text={'Live website'}/>
                    <WebsiteExtraInfoBtn iconClassName={'fa-brands fa-github'} text={'Github'}/>
                    <WebsiteExtraInfoBtn iconClassName={'fi fi-rs-pencil-paintbrush'} text={'Design'}/>
                </div>

                <InANutshell/>

            </div>


            <div className={`container ${styles.imagesContainer}`}>
                <div className={styles.bigHorizontal} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/5956458/pexels-photo-5956458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.smallHorizontal} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/5956458/pexels-photo-5956458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.miniVertical} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.smallVertical} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.mediumHorizontal} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/5956458/pexels-photo-5956458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.squareImg} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>

                <div className={styles.squareImg} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>


                <div className={styles.mediumVertical} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.mediumVertical} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>

                <div className={styles.bigVertical} onClick={() => openLightboxOnSlide(1)}>
                    <img src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                </div>


                <div className={styles.mediumHorizontal}>
                    <Video videoPath={'http://localhost:1337/uploads/Adobe_XD_2023_05_07_20_54_17_4311e03452.mp4'} className={styles.video}/>

                </div>

                
            </div>

            <div className={`container ${styles.outOfGrid}`}>
                <Video videoPath={'http://localhost:1337/uploads/Adobe_XD_2023_05_07_20_54_17_4311e03452.mp4'} className={styles.video}/>
            </div>

            <div className={styles.fullImgVideo} onClick={() => openLightboxOnSlide(1)}>
                <img src="https://images.pexels.com/photos/5956458/pexels-photo-5956458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

            <div className='container'>
                <Cta ctaText={'Vind je dit een interessant project en wil je graag samenwerken?'} url={''} btnText={'Stuur mij een berichtje'}/>

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
				sources={[
                    'https://images.pexels.com/photos/5956458/pexels-photo-5956458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
					'https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				]}
                slide={lightboxController.slide}
			/>
        </>
            
    );
}

export default ProjectDetail;
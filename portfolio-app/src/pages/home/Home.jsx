import React from 'react';
import Hero from '../../components/home/hero/Hero';
import TechnologiesSlider from '../../components/global/technologiesSlider/TechnologiesSlider';
import ProjectsOverview from '../../components/home/projectsOverview/ProjectsOverview';
import Contact from '../../components/home/contact/Contact';

function Home(props) {
    return (
        <div className={`container`}>
            <Hero />
            <TechnologiesSlider images={['https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg', 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg', 'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg', 'https://static01.nyt.com/images/2023/09/15/multimedia/15UK-DOGS-01-hftk/15UK-DOGS-01-hftk-videoSixteenByNine3000.jpg', 'https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill', 'https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=1xw:0.84375xh;center,top', 'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1650302456.jpeg?crop=0.754xw:1.00xh;0.0651xw,0&resize=1200:*', 'https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZaVrlmpJYvstalJv1T4vWrnQ8cjXqOrnEw&usqp=CAU', 'https://www.hindustantimes.com/ht-img/img/2023/07/10/550x309/labrador-retriever-gfd78b67cf_1280_1677927949246_1688982230758.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1lv8eFXVWmIuzxAoHvWekhW8xB46a479Q&usqp=CAU']}/>


            <ProjectsOverview />

            <Contact /> 
        </div>
    );
}

export default Home;
import React from 'react';
import Hero from '../../components/home/hero/Hero';
import TechnologiesSlider from '../../components/global/technologiesSlider/TechnologiesSlider';
import ProjectsOverview from '../../components/home/projectsOverview/ProjectsOverview';
import Contact from '../../components/home/contact/Contact';
import PersonalInfo from '../../components/home/personalInfo/PersonalInfo';
import Services from '../../components/home/services/Services';

function Home(props) {
    
    return (
        <div className={`container`}>
            <Hero />

            <PersonalInfo/>

            <Services/>

            <ProjectsOverview />

            <Contact /> 
        </div>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';
import Hero from '../../components/home/hero/Hero';
import TechnologiesSlider from '../../components/global/technologiesSlider/TechnologiesSlider';
import ProjectsOverview from '../../components/home/projectsOverview/ProjectsOverview';
import Contact from '../../components/home/contact/Contact';
import PersonalInfo from '../../components/home/personalInfo/PersonalInfo';
import Services from '../../components/home/services/Services';

function Home({apiPersonalData}) {

    const [apiServicesCategoriesData, setServicesCategoriesData] = useState(null);


    // Get services & categories to filter my projects from the api
    const getServicesCategoriesData = async () => {
      const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/project-categories?populate=*&sort=displayOrder:asc`);
      const json = await resp.json();
      setServicesCategoriesData(json.data);
    }
      
    useEffect(() => {
      getServicesCategoriesData();
    }, []);
    
    return (
        <div className={`container`}>
            <Hero apiData={apiPersonalData}/>

            <PersonalInfo apiData={apiPersonalData}/>

            <Services servicesData={apiServicesCategoriesData}/>

            <ProjectsOverview categoriesData={apiServicesCategoriesData} personalInfoData={apiPersonalData}/>

            <Contact apiData={apiPersonalData}/> 
        </div>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';
import Hero from '../../components/home/hero/Hero';
import TechnologiesSlider from '../../components/global/technologiesSlider/TechnologiesSlider';
import ProjectsOverview from '../../components/home/projectsOverview/ProjectsOverview';
import Contact from '../../components/home/contact/Contact';
import PersonalInfo from '../../components/home/personalInfo/PersonalInfo';
import Services from '../../components/home/services/Services';

function Home(props) {

    const [apiData, setApiData] = useState(null);

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_ROOT_URL}/projects`)
    //     .then(response => {
    //         console.log("response", response);
    //         response.json();

    //     })
    //     .then(json => {
    //         setApiData(json);
    //         console.log("Data",json);
    //     })
    //     .catch(error => console.error(error));
    // }, []);


    const getData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/personal-info?populate=*`);
        const json = await resp.json();
        setApiData(json);
      }
    
      useEffect(() => {
        getData();
      }, []);

      useEffect(()=>{
        console.log(apiData);
      }, [apiData])
    
    return (
        <div className={`container`}>
            <Hero apiData={apiData}/>

            <PersonalInfo apiData={apiData}/>

            <Services />

            <ProjectsOverview />

            <Contact apiData={apiData}/> 
        </div>
    );
}

export default Home;
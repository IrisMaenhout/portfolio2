import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import styles from './projectsOverview.module.css';
import ProjectCard from './projectCard/ProjectCard';
import CategoryBtn from '../../global/btns/categoryBtn/CategoryBtn';
import { Link, useLocation } from 'react-router-dom';

function ProjectsOverview({categoriesData, personalInfoData}) {

    const { hash } = useLocation();
    const [filteredProjects, setFilteredProjects] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [prevSelectedCategories, setPrevSelectedCategories] = useState([]);

    // Get array of the selected btn names
    const selectedCategories = hash.substring(1).split('&').map(category => decodeURIComponent(category.split('=')[1]));

    // Check if the website has the filter option enabled
    let useCategoryFilterProjects = null;
    personalInfoData !== null && ({useCategoryFilterProjects} = personalInfoData.data.attributes);

    // Check with filter categories should be visable
    let visibleCategories = [];
    categoriesData !== null && (visibleCategories = categoriesData.filter((category) => {
        return category.attributes.hideCategory === false;
    }));

    function convertToSlug(string) {
        return string.trim().toLowerCase().replace(/\s+/g, '-');
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }


    const getData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects?populate=*`);
        const json = await resp.json();
        setApiData(json.data);
    }
      
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (apiData && personalInfoData?.data?.attributes?.useCategoryFilterProjects) {
            if (selectedCategories.length === 1 && (selectedCategories[0] === "undefined" || selectedCategories[0] === "all")) {
                setFilteredProjects(apiData);
            } else if (!arraysEqual(selectedCategories, prevSelectedCategories)) {
                const filtered = apiData.filter(project =>
                    project.attributes.projectCategories.data.some(category =>
                        selectedCategories.includes(convertToSlug(category.attributes.name))
                    )
                );
                setFilteredProjects(filtered);
                setPrevSelectedCategories(selectedCategories);
            }
        }
    }, [apiData, selectedCategories, personalInfoData, prevSelectedCategories, useCategoryFilterProjects]);


    return (
        <div className={styles.projectsOverview} id={"projecten"}>
            <h2 className='gradientText'>Projecten</h2>
            
            { useCategoryFilterProjects ?
                <div className={styles.filters}>

                    <CategoryBtn location={'all'} text={'All'} initialySelected={true}/>

                    {
                        visibleCategories.map((category, i)=>(
                            <CategoryBtn 
                                key={`filter-category-${i}`} 
                                location={convertToSlug(category.attributes.name)} 
                                text={category.attributes.name} 
                                initialySelected={false}
                            />

                        ))
                    }

                </div>
            
                :

                <div className={styles.noFilter}></div>
            }
            
            <div className={styles.grid}>
                {
                    useCategoryFilterProjects ?
                        filteredProjects?.length === 0 ?
                            <p>Geen projecten gevonden. Probeer een andere filter.</p>
                            :
                            filteredProjects?.map((projectData, i) => (
                                <ProjectCard key={i} projectData={projectData} />
                            ))
                        : 
                        apiData?.map((projectData, i) => (
                            <ProjectCard key={i} projectData={projectData} />
                        ))
                }
            </div>
           
        </div>
    );
}

export default ProjectsOverview;
import React, { useEffect, useState } from 'react';
import styles from './prevNextProject.module.css';
import { Link } from 'react-router-dom';

function PrevNextProject({currentProjectId}) {

    const [projects, setProjects] = useState(null);

    const getProjectData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/projects`);
        const json = await resp.json();

        setProjects(json.data);
    }

    useEffect(()=>{
        getProjectData()
    }, []);

    let currentProjectsIndex = undefined;

    currentProjectsIndex = projects?.findIndex((project)=>{
        return project.id === currentProjectId;
    })

    console.log(currentProjectsIndex);


    console.log("pro", projects);


    return (
        <div className={styles.flexContainer}>
            {(currentProjectId !== undefined && projects !== null) &&
                <>
                    {console.log(currentProjectsIndex, [currentProjectsIndex - 1 === -1 ? projects.length - 1 : currentProjectsIndex - 1])}
                    <a href={`/projecten/${projects[currentProjectsIndex - 1 === -1 ? projects.length - 1 : currentProjectsIndex - 1].attributes.slug}`}>
                        <div className={styles.arrow}>
                            <i className='fi fi-rr-arrow-left gradientText'></i>
                        </div>

                        <div className={styles.text}>
                            <h3 className='gradientText'>Vorig project</h3>
                            <p>{projects[currentProjectsIndex - 1 === -1 ? projects.length - 1 : currentProjectsIndex - 1].attributes.title}</p>
                        </div>
                    </a>

                

                    <a href={`/projecten/${projects[currentProjectsIndex + 1 === projects.length ? 0 : currentProjectsIndex + 1].attributes.slug}`}>
                                    
                        <div className={`${styles.text} ${styles.alignRight}`}>
                            <h3 className='gradientText'>Volgend project</h3>
                            <p>{projects[currentProjectsIndex + 1 === projects.length ? 0 : currentProjectsIndex + 1].attributes.title}</p>
                        </div>

                        <div className={styles.arrow}>
                            <i className='fi fi-rr-arrow-right gradientText'></i>
                        </div>
                    </a>
                </>
            }
            
        </div>
    );
}

export default PrevNextProject;
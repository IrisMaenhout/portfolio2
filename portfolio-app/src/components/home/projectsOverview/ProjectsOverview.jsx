import React from 'react';
import styles from './projectsOverview.module.css';
import ProjectCard from './projectCard/ProjectCard';
import CategoryBtn from '../../global/btns/categoryBtn/CategoryBtn';

function ProjectsOverview({projectsData}) {
    return (
        <div>
            <h2 className='title'>Projecten</h2>
            
            <div className={styles.filters}>
                <CategoryBtn location={'?category=ux-ui-design'} text={'UX/UI design'} logoClassName={'fa-solid fa-palette'}/>

                <CategoryBtn location={'?category=web-development'} text={'Web development'} logoClassName={'fa-solid fa-code'}/>
                
                <CategoryBtn location={'?category=cms-development'} text={'CMS development'} logoClassName={'fa-brands fa-wordpress'}/>
            </div>
            
            <div className={styles.grid}>

                <ProjectCard className={styles.small}/>
                <ProjectCard className={styles.large}/>
                <ProjectCard className={styles.small}/>
                <ProjectCard className={styles.small}/>
                <ProjectCard className={styles.small}/>
            {
                // projectsData.map((projectData)=> (
                //     <ProjectCard />
                // ))
            }
            </div>
           
        </div>
    );
}

export default ProjectsOverview;
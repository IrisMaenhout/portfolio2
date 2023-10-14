import React from 'react';
import { Tilt } from 'react-tilt';
import styles from './projectsOverview.module.css';
import ProjectCard from './projectCard/ProjectCard';
import CategoryBtn from '../../global/btns/categoryBtn/CategoryBtn';

function ProjectsOverview({projectsData}) {

    // const defaultOptions = {
    //     reverse:        true,  // reverse the tilt direction
    //     max:            16,     // max tilt rotation (degrees)
    //     perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed:          1000,   // Speed of the enter/exit transition
    //     transition:     true,   // Set a transition on enter/exit.
    //     axis:           null,   // What axis should be disabled. Can be X or Y.
    //     reset:          true,    // If the tilt effect has to be reset on exit.
    //     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }

    return (
        <div>
            <h2 className='title'>Projecten</h2>
            
            <div className={styles.filters}>
                <CategoryBtn location={'ux-ui-design'} text={'UX/UI design'} logoClassName={'fa-solid fa-palette'}/>

                <CategoryBtn location={'web-development'} text={'Web development'} logoClassName={'fa-solid fa-code'}/>
                
                <CategoryBtn location={'cms-development'} text={'CMS development'} logoClassName={'fa-brands fa-wordpress'}/>
            </div>
            
            <div className={styles.grid}>

                {/* <Tilt options={defaultOptions} className={styles.small}> */}
                    <ProjectCard className={styles.smallHorizontal}/>
                {/* </Tilt> */}

                {/* <Tilt options={defaultOptions} className={styles.large}> */}
                    <ProjectCard className={styles.miniVertical}/>

                    <ProjectCard className={styles.smallVertical}/>
                {/* </Tilt> */}

                {/* <Tilt options={defaultOptions} className={styles.large}> */}
                    <ProjectCard className={styles.mediumVertical}/>
                    <ProjectCard className={styles.mediumVertical}/>

                    <ProjectCard className={styles.mediumHorizontal}/>
                    <ProjectCard className={styles.smallVertical}/>
                {/* </Tilt> */}

            
                
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
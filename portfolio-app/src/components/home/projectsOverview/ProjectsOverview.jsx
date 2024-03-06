import React from 'react';
import { Tilt } from 'react-tilt';
import styles from './projectsOverview.module.css';
import ProjectCard from './projectCard/ProjectCard';
import CategoryBtn from '../../global/btns/categoryBtn/CategoryBtn';
import { Link } from 'react-router-dom';

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
        <div className={styles.projectsOverview}>
            <h2 className='gradientText'>Projecten</h2>
            
            <div className={styles.filters}>
                <CategoryBtn location={'all'} text={'All'} initialySelected={true}/>

                <CategoryBtn location={'ux-ui-design'} text={'UX/UI design'} initialySelected={false}/>

                <CategoryBtn location={'web-development'} text={'Web development'} initialySelected={false}/>
                
                <CategoryBtn location={'cms-development'} text={'CMS development'} initialySelected={false}/>
            </div>
            
            <div className={styles.grid}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
           
        </div>
    );
}

export default ProjectsOverview;
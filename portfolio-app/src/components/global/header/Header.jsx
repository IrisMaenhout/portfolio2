import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './header.module.css';

function Header() {

    const [contactData, setContactData] = useState(null); 
    const [apiServicesCategoriesData, setServicesCategoriesData] = useState(null);

    const { hash } = useLocation();

     // Get services to check if I need to display the "dientsten" navigation item
     const getServicesCategoriesData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/project-categories?populate=*&sort=displayOrder:asc`);
        const json = await resp.json();

        if(json.data !== null && json.data.length > 1){
            let visibleServices = json.data.filter((service) => {
                return service.attributes.hideService === false;
            });

            setServicesCategoriesData(visibleServices);
        }else{
            setServicesCategoriesData(null);
        }
    }

    const getData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/personal-info?populate=contactInfo`);
        const json = await resp.json();
        setContactData(json.data.attributes.contactInfo);
      }
      
      useEffect(() => {
        getData();
        getServicesCategoriesData();

        console.log('services', apiServicesCategoriesData);
      }, []);

    const [mobileActions, setMobileActions] = useState({
        isNavOpen: window.innerWidth > 600 ? true : false,
        hoverMobileMenu: false
    });

    function toggleMobileMenu() {
        setMobileActions(prevMobileActions => {
            return {
                    ...prevMobileActions,
                    isNavOpen: !prevMobileActions.isNavOpen
                }
            
        })

    }

    function handleHover() {
        setMobileActions(prevMobileActions => {
            return {
                    ...prevMobileActions,
                    hoverMobileMenu: !prevMobileActions.hoverMobileMenu
                }
            
        })
    }

    return (
        <header> 
            
            <div>
                <button className={`${styles.hamburgerMenu}`} onClick={toggleMobileMenu} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <i className={`fa-solid fa-${mobileActions.isNavOpen? 'close': 'bars'} ${mobileActions.hoverMobileMenu ? 'gradient-text' : undefined}`}></i>
                </button>

                {/* LOGO */}
                <Link to={'/'} className=''>
                    <h4 className={styles.logo}>Iris Maenhout</h4>
                </Link>
            </div>
                
            
            {/* NAVLINKS */}
            <nav className={!mobileActions.isNavOpen ? styles.hide : undefined}>
                <ul>
                    <li>
                        <a className={hash === "#introductie" ? styles.selected : undefined} href={'/#introductie'}>Introductie</a>
                    </li>

                    {
                        (apiServicesCategoriesData !== null && apiServicesCategoriesData.length > 1 ) &&

                        <li>
                            <a className={hash === "#diensten" ? styles.selected : undefined} href={'/#diensten'}>Diensten</a>
                        </li>
                    }
                    

                    <li>
                        <a className={hash === "#projecten" ? styles.selected : undefined} href={'/#projecten'}>Projecten</a>
                    </li>

                    <li>
                        <a className={hash === "#contact" ? styles.selected : undefined} href={'/#contact'}>Contact</a>
                    </li>

                    {(contactData !== null && contactData.githubUrl !== null) &&
                        <li>
                            <a href={contactData.githubUrl} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        </li>
                    }
                    
                    {(contactData !== null && contactData.linkedInUrl !== null) &&
                        <li>
                            <a href={contactData.linkedInUrl} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                    }

                </ul>
            </nav>
            
        </header>
    );
}

export default Header;
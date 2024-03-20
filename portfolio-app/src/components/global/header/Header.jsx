import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './header.module.css';

function Header() {

    const [contactData, setContactData] = useState(null); 
    const { hash } = useLocation();

    const getData = async () => {
        const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/personal-info?populate=contactInfo`);
        const json = await resp.json();
        setContactData(json.data.attributes.contactInfo);
      }
      
      useEffect(() => {
        getData();
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
                        <a className={hash === "#introductie" ? styles.selected : undefined} href={'#introductie'}>Introductie</a>
                    </li>

                    <li>
                        <a className={hash === "#diensten" ? styles.selected : undefined} href={'#diensten'}>Diensten</a>
                    </li>

                    <li>
                        <a className={hash === "#projecten" ? styles.selected : undefined} href={'#projecten'}>Projecten</a>
                    </li>

                    <li>
                        <a className={hash === "#contact" ? styles.selected : undefined} href={'#contact'}>Contact</a>
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
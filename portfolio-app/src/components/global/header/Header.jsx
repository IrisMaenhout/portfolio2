import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.css';

function Header() {

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
                    <h2 className={styles.logo}>Logo</h2>
                </Link>
            </div>
                
            
            {/* NAVLINKS */}
            <nav className={!mobileActions.isNavOpen ? styles.hide : undefined}>
                <ul>
                    <li>
                        <Link to={'/introductie'}>Introductie</Link>
                    </li>

                    <li>
                        <Link  className={styles.selected} to={'/projecten'}>Projecten</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                    <li>
                        <a href={'/github-url'} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    </li>

                    <li>
                        <a href={'/linkedIn-url'} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </li>

                </ul>
            </nav>
            
        </header>
    );
}

export default Header;
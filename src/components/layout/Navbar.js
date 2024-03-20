import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../ui/Button';
import { useActiveLink } from '../context/ActiveLinkContext';

const Navbar = () => {
    const { active, setActive } = useActiveLink();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
      setActive(link);
      setIsMenuOpen(false);
  };

    return (
        <nav className={styles.nav}>
          <div className={styles.contentnav}>
            <div className={styles.logocontent}>
            <NavLink to='/' className={`${active === 'home' ? styles.active : ''}`} onClick={() => handleLinkClick('home')}>
                <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt='Logo' className={styles.logo} />
            </NavLink>
            </div>
            <div className={styles.itensnav}>
            <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListActive : ''}`}>
                <li className={styles.navItem}>
                    <NavLink to="/" className={`${styles.navLink} ${active === 'home' ? styles.active : ''}`} onClick={() => handleLinkClick('home')}>
                        Início
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/about" className={`${styles.navLink} ${active === 'about' ? styles.active : ''}`} onClick={() => handleLinkClick('about')}>
                        Quem Sou
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        <Button className={`${active === 'contact' ? styles.active : ''}`} onClick={() => handleLinkClick('contact')}>
                            Unir Forças
                        </Button>
                    </NavLink>
                </li>
            </ul>
            </div>
            </div>
        </nav>
        
    );
}

export default Navbar;

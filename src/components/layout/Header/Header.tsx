import { FaTimes, FaBars } from 'react-icons/fa';
import styles from './Header.module.css'
import { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return(
        <header className={styles.header}>
            <a className={styles.logo} href="/">RUSBELL</a>

        {/* botón hamburguesa */}
        <button className={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a className={styles.navLink} onClick={() => setIsMenuOpen(false)} href="#profile-card">INICIO</a></li>
                <li className={styles.navItem}><a className={styles.navLink} onClick={() => setIsMenuOpen(false)} href="#about">SOBRE MI</a></li>
                <li className={styles.navItem}><a className={styles.navLink} onClick={() => setIsMenuOpen(false)} href="#portfolio">PORTAFOLIO</a></li>
                <li className={styles.navItem}><a className={styles.navLink} onClick={() => setIsMenuOpen(false)} href="#skills">HABILIDADES</a></li>
                <li className={styles.navItem}><a className={styles.navLink} onClick={() => setIsMenuOpen(false)} href="#curriculum">HOJA DE VIDA</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header
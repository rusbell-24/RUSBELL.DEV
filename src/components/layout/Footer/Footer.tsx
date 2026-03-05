import styles from './Footer.module.css'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import SocialLinks from '../../shared/SocialLinks/SocialLinks'
const Footer = () => {
    return(
        <footer>
            <i className={styles.icon} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <MdKeyboardDoubleArrowUp />
            </i>
            <SocialLinks />
            <p className={styles.copyright}>© 2025 Rusbell.dev. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer
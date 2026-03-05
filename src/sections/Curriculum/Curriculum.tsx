import styles from './Curriculum.module.css'
import { FaArrowRight } from "react-icons/fa";

const curriculum = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>HOJA DE VIDA</p>

            <button className={styles.viewLink}>
                <a 
                href="https://drive.google.com/file/d/1Mg0qWGeREtaFfXCsWK512NEmngJYA-Q2/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
            >
                Ir a mi CV
                <FaArrowRight className={styles.arrow} />
            </a>
            <span className={styles.overlay}></span>
            </button>
            
        </div>
    )
}

export default curriculum
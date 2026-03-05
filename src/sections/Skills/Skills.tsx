import { FaCheckCircle } from 'react-icons/fa'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Habilidades</h2>
            <div className={styles.skillsSection}>
                <div className={styles.technicalSkills}>
                    <h3 className={styles.subtitle}>Habilidades Técnicas</h3>
                    <ul className={styles.skillList}>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> JavaScript
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> TypeScript
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Python
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> HTML Y CSS
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Angular
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> ReactJs
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Django Rest Framework
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Bootstrap
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Tailwind CSS
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Git
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Wordpress
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Elementor
                        </li>

                    </ul>
                </div>
                <div className={styles.softSkills}>
                    <h3 className={styles.subtitle}>Habilidades Blandas</h3>
                    <ul className={styles.skillList}>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Empatia
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Creatividad
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Trabajo en equipo
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Disciplina
                        </li>
                        <li className={styles.skillItem}>
                            <FaCheckCircle className={styles.icon} /> Enfoque
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
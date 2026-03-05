import styles from './ProjectCard.module.css';
import type { Project } from '../../../types/projects';

type ProjectCardProps = Omit<Project, 'id'>;

const ProjectCard = ({title, image, description, codeLink, pageLink}: ProjectCardProps) => {

    return (
        <article className={styles.projectCard}>
            <img src={image} alt="proyecto" />
            <div className={styles.cardContent}>
                <div className={styles.overlay}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                </div>
                <div className={styles.hoverInfo}>
                    <p className={styles.projectDescription}>{description}</p>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        Ver Codigo
                    </a>
                    <a href={pageLink} target="_blank" rel="noopener noreferrer">
                        Ver Pagina
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;
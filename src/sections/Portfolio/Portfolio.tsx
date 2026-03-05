import ProjectCard from '../../components/shared/ProjectCard/ProjectCard';
import styles from './Portfolio.module.css';
import { projects } from '../../data/projects';
const Porfolio = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}> PORTAFOLIO DE PROYECTOS</h2>
            <div className={styles.projectList}>
                {
                    projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            description = {project.description}
                            codeLink={project.codeLink}
                            pageLink={project.pageLink}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Porfolio;
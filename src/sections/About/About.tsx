import { FaBook, FaComputer, FaFutbol, FaGamepad, FaMusic } from 'react-icons/fa6'
import styles from './About.module.css'
import { IoAirplane } from 'react-icons/io5'

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>SOBRE MÍ</h2>
            <p className={styles.description}>
                Soy Ingeniero Electrónico, Especialista en Ingeniería de Software y próximo Magíster en Ingeniería de Software. 
                Me desempeño como desarrollador frontend enfocado en construir aplicaciones web claras para el usuario, sólidas a 
                nivel técnico y sostenibles en el tiempo. He trabajado en el desarrollo de interfaces y dashboards con Angular dentro 
                de sistemas de información orientados a la gestión y visualización de datos, lo que me ha permitido tomar decisiones 
                de interfaz entendiendo su impacto en la arquitectura, los servicios backend y la seguridad de la información. Además, 
                cuento con experiencia fullstack desarrollando e integrando APIs con Django y trabajando con bases de datos relacionales, 
                participando en arquitecturas modulares y soluciones basadas en microservicios y microfrontends. Me interesa seguir creciendo 
                como frontend engineer, aportando no solo en la construcción de interfaces, sino también en la calidad técnica, mantenibilidad y 
                solidez de las soluciones.
            </p>
            <div className={styles.infoSection}>
                <div className={styles.personalInfo}>
                    <h3 className={styles.subtitle}>Datos personales</h3>
                    <ul>
                        <li><strong>Nacimiento</strong>: 1993-09-17</li>
                        <li><strong>Direccion</strong>: Reservas de la colina 1, Popayán Cauca</li>
                        <li><strong>Email</strong>: rusbell.ruiz.p@uniatonoma.edu.co</li>
                    </ul>
                </div>
                <div className={styles.interests}>
                    <h3 className={styles.subtitle}>Intereses</h3>
                    <ul className={styles.interestList}>
                    <li className={styles.interestContent}><FaComputer className={styles.interestIcon} /> <span>SOFTWARE</span></li>
                    <li className={styles.interestContent}><FaGamepad className={styles.interestIcon} /> <span>JUEGOS</span></li>
                    <li className={styles.interestContent}><FaMusic className={styles.interestIcon} /> <span>MUSICA</span></li>
                    <li className={styles.interestContent}><FaFutbol className={styles.interestIcon} /> <span>FUTBOL</span></li>
                    <li className={styles.interestContent}><IoAirplane className={styles.interestIcon} /> <span>VIAJES</span></li>
                    <li className={styles.interestContent}><FaBook className={styles.interestIcon} /> <span>LIBROS</span></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About
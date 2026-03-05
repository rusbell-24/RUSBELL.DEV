import About from "../../../sections/About/About"
import Curriculum from "../../../sections/Curriculum/Curriculum"
import Portfolio from "../../../sections/Portfolio/Portfolio"
import ProfileCard from "../../../sections/ProfileCard/ProfileCard"
import Skills from "../../../sections/Skills/Skills"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import styles from "./MainLayout.module.css"

const MainLayout = () =>{
    return(
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <section id="profile-card" className={`${styles.section} ${styles.profileCardSection}`}>
                    <ProfileCard />
                </section>
                <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
                    <About />
                </section>
                <section id="portfolio" className={`${styles.section} ${styles.portfolioSection}`}>
                    <Portfolio />
                </section>
                <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
                    <Skills />
                </section>
                <section id="curriculum" className={`${styles.section} ${styles.curriculumSection}`}>
                    <Curriculum />
                </section>
            </main>
            <Footer />

        </div>
    )
}

export default MainLayout
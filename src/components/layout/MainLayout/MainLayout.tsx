import Header from "../Header/Header"
import ProfileCard from "../../../sections/ProfileCard/ProfileCard"
import Curriculum from "../../../sections/Curriculum/Curriculum"
import Footer from "../Footer/Footer"
import styles from "./MainLayout.module.css"

import {lazy, Suspense} from "react";

const About = lazy(() => import('../../../sections/About/About'));
const Portfolio = lazy(() => import('../../../sections/Portfolio/Portfolio'));
const Skills = lazy(() => import('../../../sections/Skills/Skills'));




const MainLayout = () =>{
    return(
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <section id="profile-card" className={`${styles.section} ${styles.profileCardSection}`}>
                    <ProfileCard />
                </section>
                <Suspense fallback={<div>Loading...</div>}>
                    <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
                        <About />
                    </section>
                </Suspense>

                <Suspense fallback={<div>Loading...</div>}>
                    <section id="portfolio" className={`${styles.section} ${styles.portfolioSection}`}>
                        <Portfolio />
                    </section>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
                        <Skills />
                    </section>
                </Suspense>
                <section id="curriculum" className={`${styles.section} ${styles.curriculumSection}`}>
                    <Curriculum />
                </section>
            </main>
            <Footer />

        </div>
    )
}

export default MainLayout
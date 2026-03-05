import styles from "./ProfileCard.module.css"
import profileImage from "../../assets/images/profile.jpg"
import SocialLinks from "../../components/shared/SocialLinks/SocialLinks"

const ProfileCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                    <img src={profileImage} alt="Rusbell Ruiz" />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>RUSBELL RUIZ P</h2>
                    <p className={styles.role}>Ingeniero de software</p>
                    <SocialLinks />
                </div>
        </div>
    )
}

export default ProfileCard
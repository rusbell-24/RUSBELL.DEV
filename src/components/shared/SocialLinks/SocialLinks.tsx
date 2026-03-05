import { FaGithub, FaLinkedin, FaInstagram   } from "react-icons/fa"
import styles from "./SocialLinks.module.css"


const SocialLinksData= [
    {icon:FaLinkedin , link: "https://www.linkedin.com/in/rusbell-ruiz-portocarrero-322722203/"},
    {icon:FaGithub , link: "https://github.com/rusbell-24"},
    {icon:FaInstagram , link: "https://www.instagram.com/rusbellruizportocarrero?igsh=MTdkdW5xdGh1aXgwbQ=="}
]

const SocialLinks = () => {
    return (
        <div className={styles.socialMedia}>
            {SocialLinksData.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <item.icon size={24} color='#fff'/>
                </a>
            ))}
        </div>
    )
}
export default SocialLinks;
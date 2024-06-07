import Image from "next/image";
import styles from "./componentsStyles/AboutMeAndTechlore.module.css"

interface AboutMeProps {
    img: any;
    title: string;
    info: string;
    web: string | null;
}

const AboutMe: React.FC<AboutMeProps> = ({ img, title, info, web }) => {
    return (
        <>
            <Image className={styles.imgCss} src={img} alt={title}/>
            <h1 className={`${styles.titleCss} ${styles.titleAboutUsCss}`}>{title}</h1>
            <div className={styles.infoDiv}>
                <p className={`${styles.infoCss} ${styles.infoAboutUsCss}`}>{info}</p>
                {web &&
                    <a className={styles.aCss} href={web} target="_blank">Click →</a>
                }
            </div>
            
        </>
    );
}

export default AboutMe;
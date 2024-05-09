import Image from "next/image";
import styles from "./componentsStyles/AboutMeAndTechlore.module.css"

interface AboutMeProps {
    img: any;
    title: string;
    info: string;
    web: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ img, title, info, web }) => {
    return (
        <>
            <Image className={styles.imgCss} src={img} alt={title}/>
            <h1 className={`${styles.titleCss} ${styles.titleAboutUsCss}`}>{title}</h1>
            <p className={`${styles.infoCss} ${styles.infoAboutUsCss}`}>{info}</p>
            {web &&
                <a className={styles.aCss} href={web}>Click →</a>
            }
        </>
    );
}

export default AboutMe;
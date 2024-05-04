import Image from "next/image";
import styles from "./componentsStyles/ProfileAndTechlore.module.css"

interface TechloreProps {
    img: any;
    title: string;
    info: string;
}

const Techlore: React.FC<TechloreProps> = ({ img, title, info }) => {
    return (
        <>
            <Image className={styles.imgCss} src={img} alt={title}/>
            <div className={styles.textDiv}>
                <h1 className={`${styles.titleCss} ${styles.titleTechloreCss}`}>{title}</h1>
                <p className={`${styles.infoCss} ${styles.titleTechloreCss}`} style={{ whiteSpace: 'pre-line' }}>{info}</p>
            </div>
        </>
    );
}

export default Techlore;
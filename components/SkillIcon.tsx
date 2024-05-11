import Image from "next/image";
import styles from "./componentsStyles/SkillIcon.module.css"

interface SkillIconProps {
    img: any;
    name: string;
    backgroundColor: string;
    width: number;
    height: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ img, name, backgroundColor, width, height }) => {

    return (
        <>
            <div
                className={styles.iconDiv}
                style={{
                    "backgroundColor" : `${backgroundColor}`,
                    "width" : `${width + 1.53}vw`,
                    "height" : `4.44vw`
                }}>

                <Image src={img} alt={name}
                    style={{
                        "width" : `${width}vw`,
                        "height" : `${height}vw`
                    }}/>
            </div>
            <p className={styles.iconName}>{name}</p>
        </>
    );
}

export default SkillIcon;
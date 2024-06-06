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
                    "width" : `${(width + 1.53) * 16}px`,
                    "height" : '70px'
                    // "height" : '4.44vw'
                }}>
                <Image src={img} alt={name} width={width * 16} height={height * 16}/>
            </div>
            <p className={styles.iconName}>{name}</p>
        </>
    );
}

export default SkillIcon;
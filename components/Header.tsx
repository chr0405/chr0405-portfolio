import Image from "next/image";
import star from "../img/star.png";
import styles from "./componentsStyles/Header.module.css"

export default function Header() {
    const divArray = [];

    for (let i = 0; i < 15; i++) {
        divArray.push(<div className={styles.circle} key={i}></div>);
    }

    return (
        <div className={styles.totalDiv}>
            <div className={styles.headerDiv}>
                <div className={styles.logoDiv}>
                    <h1>CHR portfolio</h1>
                    <Image src={star} alt="hearder logo"/>
                </div>
                
                <div className={styles.menuDiv}>
                    <h2>&lt;profile/&gt;</h2>
                    <h2>&lt;skill/&gt;</h2>
                    <h2>&lt;project/&gt;</h2>
                </div>
            </div>

            <div className={styles.circleDiv}>
                {divArray}
            </div>
        </div>
    )
}

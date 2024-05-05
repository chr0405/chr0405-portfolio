import styles from "./componentsStyles/Skill.module.css"

export default function Skill() {
    return (
        <div className={styles.totalDiv}>
            <div className={styles.centerDiv}>

                {/* 가로 분할 1 */}
                <div className={styles.topDiv}>
                    <div>
                        <h1 className={styles.tilteDiv}>Front-end</h1>
                    </div>
                </div>

                {/* 가로 분할 선 */}
                <div className={styles.horizontalDividingLine}>
                    <div></div>
                </div>

                {/* 가로 분할 2 */}
                <div className={styles.bottomDiv}>

                    {/* 세로 분할 1 */}
                    <div className={styles.bottomDetailDiv}>
                        <div>
                            <h1 className={styles.tilteDiv}>Version Control</h1>
                        </div>
                    </div>

                    {/* 세로 분할 선 1 */}
                    <div className={styles.verticalDividingLine}>
                        <div></div>
                    </div>

                    {/* 세로 분할 2 */}
                    <div className={styles.bottomDetailDiv}>
                        <div>
                            <h1 className={styles.tilteDiv}>Deployment</h1>
                        </div>
                    </div>

                    {/* 세로 분할 선 2 */}
                    <div className={styles.verticalDividingLine}>
                        <div></div>
                    </div>

                    {/* 세로 분할 3 */}
                    <div className={styles.bottomDetailDiv}>
                        <div>
                            <h1 className={styles.tilteDiv}>Communication</h1>
                        </div>
                    </div>

                </div>

                {/* 압정 */}
                <div className={`${styles.screw} ${styles.screwLocation}`}></div>
                <div className={`${styles.screw} ${styles.screwLocation2}`}></div>
                <div className={`${styles.screw} ${styles.screwLocation3}`}></div>
                <div className={`${styles.screw} ${styles.screwLocation4}`}></div>
            
            </div>
        </div>
    )
}
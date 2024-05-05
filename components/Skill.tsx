import styles from "./componentsStyles/Skill.module.css"
import { SkillArray } from "../array/SkillArray"
import SkillIcon from "./SkillIcon"

export default function Skill() {
    return (
        <div className={styles.totalDiv}>
            <div className={styles.centerDiv}>

                {/* 가로 분할 1 */}
                <div className={styles.topDiv}>
                    <div className={styles.fontEndBoxDiv}>
                        <h1 className={styles.tilteDiv}>Front-end</h1>
                        {/* Front-end 아이콘 전체 div */}
                        <div>
                            {/* 첫 번째 줄 */}
                            <div className={styles.frontEndLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.FrontEnd.line1.map((line1Icon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {line1Icon.img}
                                            name = {line1Icon.name}
                                            backgroundColor = {line1Icon.backgroundColor}
                                            width = {line1Icon.width}
                                            height = {line1Icon.height}/>
                                    </div>
                                ))}
                            </div>

                            {/* 두 번째 줄 */}
                            <div className={styles.frontEndLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.FrontEnd.line2.map((line2Icon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {line2Icon.img}
                                            name = {line2Icon.name}
                                            backgroundColor = {line2Icon.backgroundColor}
                                            width = {line2Icon.width}
                                            height = {line2Icon.height}/>
                                    </div>
                                ))}
                            </div>

                            {/* 세 번째 줄 */}
                            <div className={styles.frontEndLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.FrontEnd.line3.map((line3Icon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {line3Icon.img}
                                            name = {line3Icon.name}
                                            backgroundColor = {line3Icon.backgroundColor}
                                            width = {line3Icon.width}
                                            height = {line3Icon.height}/>
                                    </div>
                                ))}
                            </div>

                        </div>
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
                            <h1 className={`${styles.tilteDiv} ${styles.restTitle}`}>Version Control</h1>
                            {/* Version Control 아이콘 전체 div */}
                            <div className={styles.restLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.VersionControl.map((VCIcon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {VCIcon.img}
                                            name = {VCIcon.name}
                                            backgroundColor = {VCIcon.backgroundColor}
                                            width = {VCIcon.width}
                                            height = {VCIcon.height}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 세로 분할 선 1 */}
                    <div className={styles.verticalDividingLine}>
                        <div></div>
                    </div>

                    {/* 세로 분할 2 */}
                    <div className={styles.bottomDetailDiv}>
                        <div>
                            <h1 className={`${styles.tilteDiv} ${styles.restTitle}`}>Deployment</h1>
                            {/* Deployment 아이콘 전체 div */}
                            <div className={styles.restLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.Deployment.map((DepIcon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {DepIcon.img}
                                            name = {DepIcon.name}
                                            backgroundColor = {DepIcon.backgroundColor}
                                            width = {DepIcon.width}
                                            height = {DepIcon.height}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 세로 분할 선 2 */}
                    <div className={styles.verticalDividingLine}>
                        <div></div>
                    </div>

                    {/* 세로 분할 3 */}
                    <div className={styles.bottomDetailDiv}>
                        <div>
                            <h1 className={`${styles.tilteDiv} ${styles.restTitle}`}>Communication</h1>
                            {/* Communication 아이콘 전체 div */}
                            <div className={styles.restLineDiv}>
                                {/* 개별 아이콘 */}
                                { SkillArray.Communication.map((communiIcon, index) => (
                                    <div className={styles.iconDiv} key={index}>
                                        <SkillIcon
                                            img = {communiIcon.img}
                                            name = {communiIcon.name}
                                            backgroundColor = {communiIcon.backgroundColor}
                                            width = {communiIcon.width}
                                            height = {communiIcon.height}/>
                                    </div>
                                ))}
                            </div>
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
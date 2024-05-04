"use client";

import styles from "./componentsStyles/Profile.module.css";
import Image from "next/image";
import idPicture from "../img/idPicture.png";

import { AboutMeArray } from "../array/AboutMeArray";
import AboutMe from "./AboutMe";

import { TechloreArray } from "../array/TechloreArray";
import Techlore from "./Techlore";

import { useState, useEffect } from "react";

export default function Profile() {

    const [leftSwitch, setLeftSwitch] = useState(true);
    const [btnClassName, setBtnClassName] = useState('');

    const switchBtnFunc = (className: string) => {
        setBtnClassName(className);
    }

    return (
        <div className={styles.totalDiv}>
            <div className={styles.centerDiv}>
                <div className={styles.boxDiv}>
                    {/* 왼쪽 */}
                    <div className={styles.leftDiv}>
                        <div className={styles.pictureDiv}>
                            <Image src={idPicture} alt='idPicture'/>
                        </div>
                    </div>
                    {/* 가운데 선 */}
                    <div className={styles.centerLine}>
                        <div></div>
                    </div>
                    {/* 오른쪽 */}
                    <div className={styles.rightDiv}>
                        { leftSwitch && AboutMeArray.map((aboutMe, index) => (
                            <div className={styles.individualDiv} key={index}>
                                <AboutMe
                                    img = {aboutMe.img}
                                    title = {aboutMe.title}
                                    info = {aboutMe.info}
                                    web={aboutMe.web ? aboutMe.web : null}/>
                            </div>
                        ))}
                        { ! leftSwitch && TechloreArray.map((aboutMe, index) => (
                            <div className={styles.individualDiv2} key={index}>
                                <Techlore
                                    img = {aboutMe.img}
                                    title = {aboutMe.title}
                                    info = {aboutMe.info}/>
                            </div>
                        ))}
                    </div>
                    {/* 동그라미 압정 */}
                    <div className={`${styles.screw} ${styles.screwLocation}`}></div>
                    <div className={`${styles.screw} ${styles.screwLocation2}`}></div>
                    <div className={`${styles.screw} ${styles.screwLocation3}`}></div>
                    <div className={`${styles.screw} ${styles.screwLocation4}`}></div>
                </div>

                <div className={styles.switchDiv}>
                    <div className={`${styles.switchBtn} ${btnClassName}`}></div>
                    <p onClick={() => {
                        setLeftSwitch(true);
                        switchBtnFunc(styles.goToAboutMe);
                        }}>About me</p>
                    <p onClick={() => {
                        setLeftSwitch(false);
                        switchBtnFunc(styles.goToTechlore);
                        }}>Techlore</p>
                </div>
            </div>
        </div>
    )
}

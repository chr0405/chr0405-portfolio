"use client";

import styles from "./componentsStyles/Profile.module.css";
import Image from "next/image";
import idPicture from "../img/idPicture.png";

import { useState } from "react";

export default function Profile() {

    const [techlore, setTechlore] = useState(false);

    return (
        <>
            <div className={styles.totalDiv}>
                <div>
                    {/* 왼쪽 */}
                    <div>
                        <div>
                            <Image src={idPicture} alt="idPicture"/>
                        </div>
                    </div>
                    {/* 가운데 선 */}
                    <div></div>
                    {/* 오른쪽 */}
                    <div>

                    </div>
                    {/* 동그라미 압정 */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <div></div>
                    <p>About me</p>
                    <p>Techlore</p>
                </div>
            </div>
        </>
    )
}

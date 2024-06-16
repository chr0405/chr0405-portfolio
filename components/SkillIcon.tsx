"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./componentsStyles/icon.module.css";

interface SkillIconProps {
    img: any;
    name: string;
    backgroundColor: string;
    width: number;
    height: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ img, name, backgroundColor, width, height }) => {

    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    const [mobileView, setMobileView] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        console.log(window.innerWidth);

        if(window.innerWidth <= 768) {
            setMobileView(true);
            console.log(mobileView);
        } else {
            setMobileView(false);
            console.log(mobileView);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {
        if(window.innerWidth <= 768) {
            setMobileView(true);
            console.log(mobileView);
        } else {
            setMobileView(false);
            console.log(mobileView);
        }

    }, []);

    return (
        <>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    width: mobileView? `${width + 8}vw` : `${width + 1.53}vw`,
                    height: mobileView? `${height + 8}vw` : `${height + 1.53}vw`
                }}
                className={styles.iconDiv}
            >
                <Image className={styles.iconImg} src={img} alt={name}/>
            </div>
            <p className={styles.iconName}>{name}</p>
        </>
    );
}

export default SkillIcon;
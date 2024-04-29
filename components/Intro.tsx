"use client";

import { useState, useEffect } from "react";
import styles from "./componentsStyles/Intro.module.css";
import Image from "next/image";
import mouse from "../img/mouse.png";

export default function Intro() {

    const [click, setClick] = useState(false);
    const [stars, setStars] = useState([]);

    const backgroundFunction = () => {
        const windowWidth = innerWidth;
        const windowHeight = 1024;

        function getRandomValue(max) {
            return Math.floor(Math.random() * max);
        }

        const style = ['style1', 'style2', 'style3'];
        const opacity = ['opacity1', 'opacity2', 'opacity3'];
        const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4'];

        const starsArray = [];

        for (let i = 0; i < 200; i++) {
            const styleOption = getRandomValue(3);
            const opacityOption = getRandomValue(3);
            const twinkleOption = getRandomValue(4);
            const x = getRandomValue(windowWidth);
            const y = getRandomValue(windowHeight);

            const className = `${styles[style[styleOption]]} ${styles[opacity[opacityOption]]} ${styles[twinkle[twinkleOption]]}`;
            const styleName = `${styles[style[styleOption]]}`;
            const opacityName = `${styles[opacity[opacityOption]]}`;
            const twinkleName = `${styles[twinkle[twinkleOption]]}`;

            starsArray.push({
                className: className,
                styleName: styleName,
                opacityName: opacityName,
                twinkleName: twinkleName,
                x: x,
                y: y
            });
        }

        setStars(starsArray);
    }

    useEffect(() => {
        backgroundFunction();
    }, [click]);

    return (
        <>
            <div className={styles.totalDiv}>
                <div className={styles.textDiv}>
                    <h1 className={click? '' : styles.h1TwinklingSetting}
                        onClick={() => setClick(prev => !prev)}
                        // onMouseEnter={() => setClick(true)}
                        // onMouseLeave={() => setClick(prev => !prev)}
                        >
                        안녕하세요.<br/>Front-end 개발자 조하림입니다.
                    </h1>
                    <div style={{ display : click? 'none' : 'flex' }}>
                        <Image src={mouse} alt="intro mouse"
                            className={click? '' : styles.imgMovingSetting}
                            onClick={() => setClick(prev => !prev)}
                        />
                    </div>
                    <p>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                    </p>
                </div>
            </div>
            {click && stars.map((star, index) => (
                <div key={index}>
                    <div className={`${styles.star} ${star.className}`} style={{ position: 'absolute', top: star.y, left: star.x }}></div>
                    <div className={`${styles.star2} ${star.className}`} style={{ position: 'absolute', top: star.y, left: star.x }}></div>
                    <div className={`${styles.star3} ${star.className}`} style={{ position: 'absolute', top: star.y, left: star.x }}></div>
                    <div className={`${styles.star4} ${star.className}`} style={{ position: 'absolute', top: star.y, left: star.x }}></div>
                </div>
            ))}
        </>
    );
}
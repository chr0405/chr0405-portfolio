"use client";

import { useState, useEffect } from "react";
import styles from "./componentsStyles/Intro.module.css";
import { CiDesktopMouse1 } from "react-icons/ci";

interface Star {
    className: string;
    x: string;
    y: string;
}

export default function Intro() {

    const [click, setClick] = useState(false);
    const [stars, setStars] = useState<Star[]>([]);

    const backgroundFunction = () => {
        const windowWidth = 100;
        const windowHeight = 71.11;

        function getRandomValue(max : number) {
            return Math.floor(Math.random() * max);
        }

        const style = ['style1', 'style2', 'style3'];
        const opacity = ['opacity1', 'opacity2', 'opacity3'];
        const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4'];

        const starsArray: Star[] = [];

        for (let i = 0; i < 200; i++) {
            const styleOption = getRandomValue(3);
            const opacityOption = getRandomValue(3);
            const twinkleOption = getRandomValue(4);
            const x = getRandomValue(windowWidth);
            const y = getRandomValue(windowHeight);

            const className = `${styles[style[styleOption]]} ${styles[opacity[opacityOption]]} ${styles[twinkle[twinkleOption]]}`;

            starsArray.push({
                className: className,
                x: `${x}vw`,
                y: `${y}vw`
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
                        onClick={() => setClick(prev => !prev)}>
                        안녕하세요.<br/>Front-end 개발자 조하림입니다.
                    </h1>
                    <div style={{ display : click? 'none' : 'flex' }}>
                        <CiDesktopMouse1 
                        className={click? '' : styles.imgMovingSetting}
                        onClick={() => setClick(prev => !prev)}
                        style={click ? {} : { filter: 'drop-shadow(0.14vw 0.14vw 0.14vw rgba(255, 255, 255, 1))' }}
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
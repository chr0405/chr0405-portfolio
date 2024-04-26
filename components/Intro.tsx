"use client";

import { useState, useEffect } from "react";
import styles from "./componentsStyles/Intro.module.css";

export default function Intro() {

    const [underline, setUnderline] = useState(false);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        function getRandomValue(max) {
            return Math.floor(Math.random() * max);
        }

        const style = ['style1', 'style2', 'style3'];
        const opacity = ['opacity1', 'opacity2', 'opacity3'];
        const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4'];

        const starsArray = [];

        for (let i = 0; i < 100; i++) {
            const _s = getRandomValue(3);
            const _o = getRandomValue(3);
            const _t = getRandomValue(4);
            const x = getRandomValue(windowWidth);
            const y = getRandomValue(windowHeight);

            const className = `${styles.star} ${styles[style[_s]]} ${styles[opacity[_o]]} ${styles[twinkle[_t]]}`;

            starsArray.push({
                className: className,
                x: x,
                y: y
            });
        }

        setStars(starsArray);
    }, []); // Run only once when the component mounts

    return (
        <>
            <div className={styles.totalDiv}>
                <div className={styles.textDiv}>
                    <h1 style={{ textDecoration: underline? "none": "underline" }}
                        onClick={() => setUnderline(prev => !prev)}>
                        타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다.
                    </h1>
                    <p>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다.<br/>
                    </p>
                </div>
                {stars.map((star, index) => (
                    <div key={index} className={star.className} style={{ position: 'absolute', top: star.y, left: star.x }}></div>
                ))}
            </div>
        </>
    );
}
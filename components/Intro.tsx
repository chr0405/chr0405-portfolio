"use client";

import { useState, useEffect } from "react";
import styles from "./componentsStyles/Intro.module.css";
import { useRouter } from 'next/navigation';

interface Star {
    className: string;
    x: string;
    y: string;
}

export default function Intro() {
    
    const [stars, setStars] = useState<Star[]>([]);

    const backgroundFunction = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        let numStars: number;

        // 별 개수 조정
        if (windowWidth <= 480) {
            numStars = 50;
        } else if (windowWidth <= 768) {
            numStars = 80;
        } else {
            numStars = 100;
        }

        function getRandomValue(max: number) {
            return Math.floor(Math.random() * max);
        }
    
        const style = ['style1', 'style2', 'style3'];
        const opacity = ['opacity1', 'opacity2', 'opacity3'];
        const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4'];
    
        const starsArray: Star[] = [];
    
        for (let i = 0; i < numStars; i++) {
            const styleOption = getRandomValue(3);
            const opacityOption = getRandomValue(3);
            const twinkleOption = getRandomValue(4);
            const x = getRandomValue(100); // vw 단위로 설정
            const y = getRandomValue(100); // vh 단위로 설정
    
            const className = `${styles[style[styleOption]]} ${styles[opacity[opacityOption]]} ${styles[twinkle[twinkleOption]]}`;
    
            starsArray.push({
                className: className,
                x: `${x}vw`,
                y: `${y}vh`
            });
        }
    
        setStars(starsArray);
    }

    useEffect(() => {
        backgroundFunction();
    }, []);

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
        } else {
            setMobileView(false);
        }

    }, []);

    return (
        <>
            <div className={styles.totalDiv}>
                <div className={styles.textDiv}>
                    <h1 className={styles.h1TwinklingSetting}>
                        안녕하세요.<br/>Front-end 개발자 조하림입니다.
                    </h1>
                    <p className={styles.introduce}>
                        {mobileView ? (
                            <>
                            도전과 변화를 좋아하며<br />성취감과 업데이트되는 목표를 통해 성장하고 있습니다.
                            <br />
                            협업 과정에서 소통을 중시하며<br />변화에 대처하는 과정을 즐깁니다.
                            <br />
                            적절한 기술 적용과 유연한 대처로<br />회사의 효율성을 향상시키는 개발자로 일하고 싶습니다.
                            <br />
                            </>
                        ) : (
                            <>
                            도전과 변화를 좋아하며 성취감과 업데이트되는 목표를 통해 성장하고 있습니다.
                            <br />
                            협업 과정에서 소통을 중시하며 변화에 대처하는 과정을 즐깁니다.
                            <br />
                            적절한 기술 적용과 유연한 대처로 회사의 효율성을 향상시키는 개발자로 일하고 싶습니다.
                            <br />
                            </>
                        )}
                    </p>
                </div>
            </div>
            {stars.map((star, index) => (
                <div key={index}>
                    <div className={`${styles.star} ${star.className}`} style={{top: star.y, left: star.x }}></div>
                    <div className={`${styles.star2} ${star.className}`} style={{top: star.y, left: star.x }}></div>
                    <div className={`${styles.star3} ${star.className}`} style={{top: star.y, left: star.x }}></div>
                    <div className={`${styles.star4} ${star.className}`} style={{top: star.y, left: star.x }}></div>
                </div>
            ))}
        </>
    );
}
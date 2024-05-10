'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import star from '../img/star.png';
import styles from './componentsStyles/Header.module.css';

export default function Header() {

    // 메뉴를 누르면 스크롤 이동
    const moveToPageFunc = (pageName: string) => {
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 커튼
    const divArray = [];

    for (let i = 0; i < 15; i++) {
        divArray.push(<div className={styles.circle} key={i}></div>);
    }

    // 해당 페이지와 이름이 일치하는 메뉴 속성을 다르게

    const [currentPage, setCurrentPage] = useState('');

    const handleScroll = () => {
        const introPage = document.getElementById('introPage');
        const profilePage = document.getElementById('profilePage');
        const skillPage = document.getElementById('skillPage');
        const projectPage = document.getElementById('projectPage');
        
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (introPage && scrollTop >= introPage.offsetTop && (profilePage?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('introPage');
        } else if (profilePage && scrollTop >= profilePage.offsetTop && (skillPage?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('profilePage');
        } else if (skillPage && scrollTop >= skillPage.offsetTop && (projectPage?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('skillPage');
        } else if (projectPage && scrollTop >= projectPage.offsetTop) {
            setCurrentPage('projectPage');
        }
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.totalDiv}>
            <div className={styles.headerDiv}>
                <div className={styles.logoDiv}>
                    <h1>CHR portfolio</h1>
                    <Image src={star} alt='hearder logo'/>
                </div>
                
                <div className={styles.menuDiv}>
                    <h2 onClick={() => moveToPageFunc('profilePage')}
                        style={{'color' : currentPage === 'profilePage' ? '#4D4D4D' : ''}}>
                    &lt;profile/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('skillPage')}
                        style={{'color' : currentPage === 'skillPage' ? '#4D4D4D' : ''}}>
                    &lt;skill/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('projectPage')}
                        style={{'color' : currentPage === 'projectPage' ? '#4D4D4D' : ''}}>
                    &lt;project/&gt;</h2>
                </div>
            </div>

            <div className={styles.circleDiv}>
                {divArray}
            </div>
        </div>
    )
}
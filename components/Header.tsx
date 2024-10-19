'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import star from '../img/star.png';
import styles from './componentsStyles/Header.module.css';
import {AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

export default function Header() {

    const [pageNum, setPageNum] = useState(1);

    // 메뉴를 누르면 스크롤 이동
    const moveToPageFunc = (pageName: string) => {
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            const offsetTop = targetPage.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    // 화살표 버튼 누르면 스크롤 이동
    const moveToScrollFunc = (pageName: string) => {
        if (pageName == 'up') {
            const currentScrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            window.scrollTo({ top: currentScrollPosition - viewportHeight, behavior: 'smooth' });
        }else if (pageName == 'down') {
            const currentScrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            window.scrollTo({ top: currentScrollPosition + viewportHeight, behavior: 'smooth' });
        }
    };

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
                <div className={styles.headerDiv}>
                    <div className={styles.logoDiv}>
                        <h1 onClick={() => {moveToPageFunc('intro')
                            setPageNum(1)}}>CHR portfolio</h1>
                        { !mobileView &&
                            <Image src={star} alt='hearder logo'/>
                        }
                    </div>
                    
                    <div className={styles.menuDiv}>
                        <h2
                            onClick={() => {
                                moveToPageFunc('profile');
                                setPageNum(2);
                            }}
                            className={`${pageNum === 2 ? styles.menuClick : ''}`}>
                            &lt;profile/&gt;
                        </h2>
                        <h2 onClick={() => {
                                moveToPageFunc('skill'),
                                setPageNum(3)}}
                            className={`${pageNum === 3 ? styles.menuClick : ''}`}>
                        &lt;skill/&gt;</h2>
                        <h2 onClick={() => {
                                moveToPageFunc('project'),
                                setPageNum(4)}}
                            className={`${pageNum === 4 ? styles.menuClick : ''}`}>
                        &lt;project/&gt;</h2>
                    </div>
                </div>
            </div>

            <div className={styles.rightTotal}>
                <div onClick={() => moveToScrollFunc('up')}><AiOutlineUp size={45} color="#4D4D4D"/></div>
                <div onClick={() => moveToScrollFunc('down')}><AiOutlineDown size={45} color="#4D4D4D"/></div>
            </div>
        </>
        
    )
}
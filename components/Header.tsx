'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import star from '../img/star.png';
import styles from './componentsStyles/Header.module.css';
import {AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

export default function Header() {

    const [pageNum, setPageNum] = useState(1);
    const [isMouseOverUp, setIsMouseOverUp] = useState(false);
    const [isMouseOverDown, setIsMouseOverDown] = useState(false);
    
    // 내림 버튼 위 안내창 표시 제어
    const [showInfo, setShowInfo] = useState(false);
    // 표시 조건
    const [showNow, setShowNow] = useState(true);

    // 메뉴를 누르면 스크롤 이동
    const moveToPageFunc = (pageName: string) => {
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            const offsetTop = targetPage.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            window.history.pushState(null, '', `/#${pageName}`);
        }
    };

    // 화살표 버튼 누르면 스크롤 이동
    const moveToScrollFunc = (pagedirect: string) => {

        // intro
        if (pageNum == 1){
            if (pagedirect == 'down'){
                moveToPageFunc('profile');
                setPageNum(2);
            }
        }

        // profile
        if (pageNum == 2){
            if (pagedirect == 'up') {
                moveToPageFunc('intro');
                setPageNum(1);
            }
            else if (pagedirect == 'down'){
                moveToPageFunc('skill')
                setPageNum(3);
            }
        }

        // skill
        if (pageNum == 3){
            if (pagedirect == 'up') {
                moveToPageFunc('profile');
                setPageNum(2);
            }
            else if (pagedirect == 'down'){
                moveToPageFunc('project');
                setShowNow(true);
                setPageNum(4);
            }
        }

        // project
        if (pageNum == 4){
            if (pagedirect == 'up') {
                moveToPageFunc('skill');
                setPageNum(3);
            }
            else if (pagedirect == 'down'){
                const currentScrollPosition = window.scrollY;
                const viewportHeight = window.innerHeight;
                window.scrollTo({ top: currentScrollPosition + viewportHeight, behavior: 'smooth' });
                setPageNum(5);
            }
        }

        // project2
        if (pageNum == 5){
            if (pagedirect == 'up') {
                moveToPageFunc('project');
                setShowNow(false);
                setPageNum(4);
            }
        }
    };

    useEffect(() => {
        if ((pageNum === 1 || pageNum === 4) && showNow == true) {
            setShowInfo(true);
            const timer = setTimeout(() => {
                setShowInfo(false);
                setShowNow(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setShowInfo(false);
        }
    }, [pageNum, showNow]);

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
                        { !mobileView &&
                            <h1 onClick={() => {moveToPageFunc('intro');
                                setShowNow(true);
                                setPageNum(1)}}>CHR portfolio</h1>
                        }
                        <Image src={star} alt='hearder logo' onClick={() => {moveToPageFunc('intro');
                                setShowNow(true);
                                setPageNum(1)}}/>
                    </div>
                    
                    <div className={styles.menuDiv}>
                        <h2
                            onClick={() => {
                                moveToPageFunc('profile');
                                setPageNum(2);
                            }}
                            className={`${pageNum === 2 && !mobileView ? styles.menuClick : ''}`}>
                            &lt;profile/&gt;
                        </h2>
                        <h2 onClick={() => {
                                moveToPageFunc('skill'),
                                setPageNum(3)}}
                            className={`${pageNum === 3 && !mobileView ? styles.menuClick : ''}`}>
                        &lt;skill/&gt;</h2>
                        <h2 onClick={() => {
                                moveToPageFunc('project'),
                                setShowNow(true);
                                setPageNum(4)}}
                            className={`${(pageNum === 4 || pageNum === 5) && !mobileView ? styles.menuClick : ''}`}>
                        &lt;project/&gt;</h2>
                    </div>
                </div>
            </div>

            { !mobileView && 
                <div className={styles.rightTotal}>
                    <div onClick={() => moveToScrollFunc('up')}
                        onMouseEnter={() => setIsMouseOverUp(true)}
                        onMouseLeave={() => setIsMouseOverUp(false)}
                        className={
                            pageNum === 1
                            ? `${styles.mouseEnterDirect} ${styles.directDisable}`
                            : isMouseOverUp
                            ? `${styles.mouseEnterDirect} ${styles.mouseLeaveDirect}`
                            : styles.mouseEnterDirect
                        }>
                        <AiOutlineUp size={45} color="#4D4D4D"/>
                    </div>
                    
                    {showInfo && (
                        <div className={styles.infoDiv}>
                            <p className={styles.infoP}>{pageNum === 1 ? "아래 버튼을 눌러 내용을 넘겨보세요."
                                : "아래 버튼을 눌러 다른 프로젝트도 확인해 보세요."}</p>
                        </div>
                    )}
                    
                    <div onClick={() => moveToScrollFunc('down')}
                        onMouseEnter={() => setIsMouseOverDown(true)}
                        onMouseLeave={() => setIsMouseOverDown(false)}
                        className={
                            pageNum === 5
                            ? `${styles.mouseEnterDirect} ${styles.directDisable}`
                            : isMouseOverDown
                            ? `${styles.mouseEnterDirect} ${styles.mouseLeaveDirect}`
                            : styles.mouseEnterDirect
                        }>
                        <AiOutlineDown size={45} color="#4D4D4D"/>
                    </div>
                </div>
            }
            
        </>
        
    )
}
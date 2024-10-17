'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import star from '../img/star.png';
import styles from './componentsStyles/Header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    // 현재 페이지 상태 및 스크롤 위치 저장
    const [currentPage, setCurrentPage] = useState('');
    const [lastScrollY, setLastScrollY] = useState(0); 

    // 메뉴를 누르면 스크롤 이동
    const moveToPageFunc = (pageName: string) => {
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            // 페이지를 즉시 이동
            router.push(`/#${pageName}`)
            setCurrentPage(pageName);
        }
    };

    // 스크롤 감지해서 현재 페이지를 설정
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const pages = ['intro', 'profile', 'skill', 'project'];

        pages.forEach((page, index) => {
            const pageElement = document.getElementById(page);
            if (pageElement && scrollTop >= pageElement.offsetTop) {
                if (index === pages.length - 1 || scrollTop < (document.getElementById(pages[index + 1])?.offsetTop || Infinity)) {
                    setCurrentPage(page);
                }
            }
        });
    };

    // 스크롤 감지해서 페이지 이동
    const pageChange = () => {
        const currentScrollY = window.scrollY;

        // 스크롤이 아래로 이동할 때만 실행
        if (currentScrollY > lastScrollY) {
            const nextPage = {
                intro: 'profile',
                profile: 'skill',
                // skill: 'project',
                // project는 다음 페이지가 없음
            }[currentPage];

            if (nextPage) {
                const targetPage = document.getElementById(nextPage);
                if (targetPage) {
                    window.scrollTo({ top: targetPage.offsetTop, behavior: 'smooth' });
                }
            }
        }

        // 이전 스크롤 위치를 업데이트
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        const onScroll = () => {
            handleScroll();
            pageChange();
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [lastScrollY, currentPage]);

    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [mobileView, setMobileView] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setMobileView(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setMobileView(window.innerWidth <= 768);
    }, []);

    return (
        <div className={styles.totalDiv}>
            <div className={styles.headerDiv}>
                <div className={styles.logoDiv}>
                    <h1 onClick={() => router.push('/')}>CHR portfolio</h1>
                    { !mobileView &&
                        <Image src={star} alt='hearder logo'/>
                    }
                </div>
                
                <div className={styles.menuDiv}>
                    <h2 onClick={() => moveToPageFunc('profile')}>
                    &lt;profile/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('skill')}>
                    &lt;skill/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('project')}>
                    &lt;project/&gt;</h2>
                </div>
            </div>
        </div>
    )
}
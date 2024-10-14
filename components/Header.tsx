'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import star from '../img/star.png';
import styles from './componentsStyles/Header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {

    const router = useRouter();

    // 메뉴를 누르면 스크롤 이동
    const moveToPageFunc = (pageName: string, offset: number) => {
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            window.scrollBy({ top: targetPage.getBoundingClientRect().top + offset, behavior: 'smooth' });
            setTimeout(() => {
                window.location.hash = pageName;
            }, 100);
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
        const intro = document.getElementById('intro');
        const profile = document.getElementById('profile');
        const skill = document.getElementById('skill');
        const project = document.getElementById('project');
        
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (intro && scrollTop >= intro.offsetTop && (profile?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('intro');
        } else if (profile && scrollTop >= profile.offsetTop && (skill?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('profile');
        } else if (skill && scrollTop >= skill.offsetTop && (project?.offsetTop ?? Infinity) > scrollTop) {
            setCurrentPage('skill');
        } else if (project && scrollTop >= project.offsetTop ) {
            setCurrentPage('project');
        }
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <div className={styles.totalDiv}>
            <div className={styles.headerDiv}>
                <div className={styles.logoDiv}>
                    <h1 onClick={() => router.push('/')}>CHR portfolio</h1>
                    { !mobileView &&
                        <Image src={star} alt='hearder logo'/>
                    }
                </div>
                
                <div className={styles.menuDiv}>
                    <h2 onClick={() => moveToPageFunc('profile', 0)}
                        style={{'color' : currentPage === 'profile' ? '#4D4D4D' : ''}}>
                    &lt;profile/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('skill', 1)}
                        style={{'color' : currentPage === 'skill' ? '#4D4D4D' : ''}}>
                    &lt;skill/&gt;</h2>
                    <h2 onClick={() => moveToPageFunc('project', 1)}
                        style={{'color' : currentPage === 'project' ? '#4D4D4D' : ''}}>
                    &lt;project/&gt;</h2>
                </div>
            </div>

            {/* <div className={styles.circleDiv}>
                {divArray}
            </div> */}
        </div>
    )
}
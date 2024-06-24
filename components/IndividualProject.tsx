"use client";

import Image from "next/image";
import styles from "./componentsStyles/IndividualProject.module.css"

import DemoImg from "../img/home.png";
import YouTubeImg from "../img/youTube.png";
import GitHub from "../img/gitHub.png";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import ProjectModal from "./ProjectModal";

interface IndividualProjectProps {
    mainCapture : any;
    capture : any[];
    aboutCapture : any[];
    name : string;
    period : string;
    mainAboutProject : string;
    aboutProject : string;
    frontEnd : string;
    mainFunction : string;
    MyContributions : string;
    troubleShooting : string;
    webSite : {
        Demo? : string;
        YouTube? : string;
        YouTubeEmbed? : string;
        GitHub? : string;
    };
}

const IndividualProject : React.FC<IndividualProjectProps> = ({
        mainCapture, capture, aboutCapture, name, period, mainAboutProject, aboutProject, frontEnd, mainFunction, MyContributions, troubleShooting, webSite,
    }) => {

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

    const [captureNum, setCaptureNum] = useState(0);

    const [isMouseOverDemo, setIsMouseOverDemo] = useState(false);
    const [isMouseOverYouTube, setIsMouseOverYouTube] = useState(false);
    const [isMouseOverGitHub, setIsMouseOverGitHub] = useState(false);

    // modal
    const pathname = usePathname();
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (pathname === `/#project/${name}`) {
            setModalShow(true);
        }
    }, [pathname]);

    const openModal = () => {
        setModalShow(true);
        window.history.pushState(null, '', `/#project/${name}`);
    };

    const closeModal = () => {
        setModalShow(false);
        window.history.pushState(null, '', '/#project');
    };

    const [imgPage, setImgPage] = useState(true);
    const [leftSwitch, setLeftSwitch] = useState(false);
    const [rightSwitch, setRightSwitch] = useState(false);

    return (
        <>
            <ProjectModal
                capture = {capture}
                aboutCapture = {aboutCapture}
                name = {name}
                period = {period}
                aboutProject = {aboutProject}
                frontEnd = {frontEnd}
                mainFunction = {mainFunction}
                MyContributions = {MyContributions}
                troubleShooting = {troubleShooting}
                webSite = {webSite}
                show={modalShow}
                onClose={closeModal}
            />
            <div className={styles.totalDiv}>
                {/* 프로젝트 */}
                <div className={styles.projectDiv}>
                    <div className={styles.projectNameDiv}>
                        <div  className={styles.projectName}>{name}</div>
                        {webSite.YouTubeEmbed &&
                            <div className={styles.switchDiv}>
                                { (!leftSwitch && !rightSwitch) &&
                                    <div className={styles.switchBtn}></div>
                                } {rightSwitch &&
                                    <div className={`${styles.switchBtn} ${styles.goToYouTube}`}></div>
                                } {leftSwitch &&
                                    <div className={`${styles.switchBtn} ${styles.goToPicture}`}></div>
                                }
                                <p onClick={() => {
                                    setImgPage(true);
                                    setLeftSwitch(true);
                                    setRightSwitch(false);
                                    }}>Pictures</p>
                                <p onClick={() => {
                                    setImgPage(false);
                                    setLeftSwitch(false);
                                    setRightSwitch(true);
                                    }}>youTube</p>
                            </div>
                        }
                    </div>
                    
                    {/* 사진 */}
                    {imgPage &&
                        <>
                            <div className={styles.projectPictureDiv}>
                                <Image src={mainCapture} alt="captureImg"/>
                            </div>
                        </>
                    }

                    {/* 유튜브 */}
                    {!imgPage &&
                        <iframe className={styles.projectYouTubeIframe}
                        src={webSite.YouTubeEmbed}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    }

                    <div className={styles.textDiv}>
                        <div className={styles.namePeriodDiv}>
                            <h1>{name}</h1>
                            <p>{period}</p>
                        </div>
                        <h6 className={styles.mainAboutProject}>{mainAboutProject}</h6>
                        <p className={styles.more}
                            onClick={openModal}>More →</p>
                    </div>
                </div>

                {/* 바로가기 */}
                <div className={styles.webSiteDiv}>
                    {webSite && webSite.Demo && (
                        <div
                            className={isMouseOverDemo ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv1}` : `${styles.onMouseLeaveDiv}`}
                            onMouseEnter={() => setIsMouseOverDemo(true)}
                            onMouseLeave={() => setIsMouseOverDemo(false)}>
                            <div className={isMouseOverDemo ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv2}` : ''}>
                                <div className={isMouseOverDemo ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv3}` : ''}>
                                    <a className={styles.webSite} href={webSite.Demo} target="_blank">
                                    <Image src={DemoImg} alt="DemoImg" />
                                    Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {webSite && webSite.YouTube && (
                        <div
                            className={isMouseOverYouTube ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv1}` : `${styles.onMouseLeaveDiv}`}
                            onMouseEnter={() => setIsMouseOverYouTube(true)}
                            onMouseLeave={() => setIsMouseOverYouTube(false)}>
                            <div className={isMouseOverYouTube ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv2}` : ''}>
                                <div className={isMouseOverYouTube ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv3}` : ''}>
                                    <a className={styles.webSite} href={webSite.YouTube} target="_blank">
                                        <Image style={{
                                            "width" : mobileView? "8.34vw" : "2.78vw",
                                            "height" : mobileView? "8.34vw" :  "2.78vw",
                                            "marginBottom" : "0.05vw",
                                        }}
                                            src={YouTubeImg} alt="YouTubeImg"/>
                                        YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {webSite && webSite.GitHub && (
                        <div
                            className={isMouseOverGitHub ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv1}` : `${styles.onMouseLeaveDiv}`}
                            onMouseEnter={() => setIsMouseOverGitHub(true)}
                            onMouseLeave={() => setIsMouseOverGitHub(false)}>
                            <div className={isMouseOverGitHub ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv2}` : ''}>
                                <div className={isMouseOverGitHub ? `${styles.onMouseEnter} ${styles.onMouseEnterDiv3}` : ''}>
                                    <a className={styles.webSite} href={webSite.GitHub} target="_blank">
                                        <Image src={GitHub} alt="GitHub"/>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default IndividualProject;
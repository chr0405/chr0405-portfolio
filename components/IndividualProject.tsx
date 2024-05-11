"use client";

import Image from "next/image";
import styles from "./componentsStyles/IndividualProject.module.css"

import DemoImg from "../img/home.png";
import YouTubeImg from "../img/youTube.png";
import GitHub from "../img/gitHub.png";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface IndividualProjectProps {
    capture : any[];
    name : string;
    period : string;
    aboutProject : string;
    mainFunction : string;
    frontEnd : string;
    deployment : string;
    webSite : {
        Demo? : string;
        YouTube? : string;
        GitHub? : string;
    };
    etc? : {
        notion? : string;
        notionLink? : string;
        aboutNotion? : string;
    }
}

const IndividualProject : React.FC<IndividualProjectProps> = ({
        capture, name, period, aboutProject, mainFunction, frontEnd, deployment, webSite, etc
    }) => {
    
    const [captureNum, setCaptureNum] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    const [isMouseOverDemo, setIsMouseOverDemo] = useState(false);
    const [isMouseOverYouTube, setIsMouseOverYouTube] = useState(false);
    const [isMouseOverGitHub, setIsMouseOverGitHub] = useState(false);

    return (
        <>
            {modalShow &&
                <ProjectModal
                    capture = {capture}
                    name = {name}
                    period = {period}
                    aboutProject = {aboutProject}
                    mainFunction = {mainFunction}
                    frontEnd = {frontEnd}
                    deployment = {deployment}
                    etc = {etc}
                    setModalShow={setModalShow}
                />
            }
            <div className={styles.totalDiv}>
                {/* 프로젝트 */}
                <div className={styles.projectDiv}>
                    <div className={styles.projectNameDiv}>{name}</div>

                    {/* 사진 */}
                    <div className={styles.projectPictureDiv}>

                        <Image src={capture[captureNum]} alt="captureImg"/>

                        <div className={styles.sectionDiv}>
                            {/* left section */}
                            <div onClick={()=> {
                                if(captureNum > 0){
                                    setCaptureNum((pre) => pre - 1);
                                }
                            }}></div>
                            {/* right section */}
                            <div onClick={()=> {
                                if(captureNum < (capture.length - 1)){
                                    setCaptureNum((pre) => pre + 1);
                                }
                            }}></div>
                        </div>

                        <div className={styles.projectPictureSelectTotalDiv}
                            style={{display : capture.length > 1 ? 'flex' : 'none'}}>
                            {[...Array(capture.length)].map((_, index) => (
                                <div className={styles.projectPictureSelectDiv}
                                    style={{backgroundColor : index === captureNum ? '#4D4D4D' : '#C6C6C6'}}
                                    key={index}
                                    onClick={() => {
                                        setCaptureNum(index);
                                    }}>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className={styles.textDiv}>
                        <div className={styles.namePeriodDiv}>
                            <h1>{name}</h1>
                            <p>{period}</p>
                        </div>
                        <h6 className={styles.aboutProject}>{aboutProject}</h6>
                        <p className={styles.more}
                            onClick={() => setModalShow(true)}>More →</p>
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
                                            "width" : "2.78vw",
                                            "height" : "2.78vw",
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
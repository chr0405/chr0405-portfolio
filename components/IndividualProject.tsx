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
                />}
            <div className={styles.totalDiv}>
                {/* 프로젝트 */}
                <div className={styles.projectDiv}>
                    <div className={styles.projectNameDiv}>{name}</div>

                    {/* 사진 */}
                    <div className={styles.projectPictureDiv}>
                        <Image src={capture[captureNum]} alt="captureImg"/>
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
                        <a className={styles.webSite}
                        href={webSite.Demo}>
                            <Image src={DemoImg} alt="DemoImg"/>
                            Demo
                        </a>
                    )}
                    {webSite && webSite.YouTube && (
                        <a className={styles.webSite} href={webSite.YouTube}>
                            <Image style={{
                                "width" : "2.78vw",
                                "height" : "2.78vw",
                                "marginBottom" : "0.05vw",
                            }}
                                src={YouTubeImg} alt="YouTubeImg"/>
                            YouTube
                        </a>
                    )}
                    {webSite && webSite.GitHub && (
                        <a className={styles.webSite}
                        href={webSite.GitHub}>
                            <Image src={GitHub} alt="GitHub"/>
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

export default IndividualProject;
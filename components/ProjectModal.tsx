"use client";

import Image from "next/image";
import styles from "./componentsStyles/ProjectModal.module.css"

import { useState, useEffect } from "react";

interface ProjectModalProps {
    capture : any[];
    name : string;
    period : string;
    aboutProject : string;
    mainFunction : string;
    frontEnd : string;
    deployment : string;
    etc? : {
        notion? : string;
        notionLink? : string;
        aboutNotion? : string;
    }

    setModalShow: (show: boolean) => void;
}

const ProjectModal : React.FC<ProjectModalProps> = ({
        capture, name, period, aboutProject, mainFunction, frontEnd, deployment, etc, setModalShow
    }) => {
    
    const [captureNum, setCaptureNum] = useState(0);
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const scrollAutoFunc = () => {
        document.body.style.overflow = 'auto';
    }
    
    return (
        <div className={styles.totalDiv}
            onClick={() => {
                scrollAutoFunc();
                setModalShow(false);
            }}>
            <div className={styles.modalDiv}
                onClick={(event) => {
                    event.stopPropagation();
                    setModalShow(true);
                }}>
                {/* left */}
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

                {/* right */}
                <div className={styles.rightDiv}>
                    {/* header */}
                    <div className={styles.headerDiv}>
                        <h1>
                            {name}</h1>
                        {/* X mark */}
                        <div className={styles.closeIconDiv}
                            onClick={(event) => {
                                event.stopPropagation();
                                scrollAutoFunc();
                                setModalShow(false);
                            }}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    {/* content */}
                    <div className={styles.contentDiv}>
                        <div className={styles.contentDiv2}>
                            <h2>About Project</h2>
                            <p>{aboutProject}</p>

                            <h2>Main Function</h2>
                            <p>{mainFunction}</p>

                            <h2>Front-end</h2>
                            <p>{frontEnd}</p>

                            <h2>Deployment</h2>
                            <p>{deployment}</p>

                            {etc && (
                                <>
                                    <h2>etc.</h2>
                                    <div className={styles.ectContentDiv}>
                                        <div className={styles.ectContentPandADiv}>
                                            <p>{etc.notion}</p>
                                            <a href={etc.notionLink} target="_blank">Click →</a>
                                        </div>
                                        <p>{etc.aboutNotion}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;
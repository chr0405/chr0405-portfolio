"use client";

import Image from "next/image";
import styles from "./componentsStyles/ProjectModal.module.css"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface ProjectModalProps {
    capture: any[];
    aboutCapture : any[];
    name: string;
    period: string;
    aboutProject: string;
    mainFunction: string;
    frontEnd: string;
    deployment: string;
    etc?: {
        notion?: string;
        notionLink?: string;
        aboutNotion?: string;
    };
    webSite: {
        YouTube?: string;
    };
    show: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    capture, aboutCapture, name, period, aboutProject, mainFunction, frontEnd, deployment, webSite, etc, show, onClose
}) => {
    const [captureNum, setCaptureNum] = useState(0);
    const [imgPage, setImgPage] = useState(true);
    const [leftSwitch, setLeftSwitch] = useState(false);
    const [rightSwitch, setRightSwitch] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show]);

    const scrollAutoFunc = () => {
        document.body.style.overflow = 'auto';
    };

    if (!show) return null;

    return (
        <div className={styles.totalDiv}
            onClick={() => {
                scrollAutoFunc();
                onClose();
                window.location.hash = 'project';
            }}>
            <div className={styles.modalDiv}
                onClick={(event) => {
                    event.stopPropagation();
                }}>
                {/* left 사진 */}
                {imgPage &&
                    <div className={styles.projectPictureDiv}>
                        <Image src={capture[captureNum]} alt="captureImg" />
                        <div>{aboutCapture[captureNum]}</div>

                        <div className={styles.sectionDiv}>
                            {/* left section */}
                            <div onClick={() => {
                                if (captureNum > 0) {
                                    setCaptureNum((pre) => pre - 1);
                                }
                            }}></div>
                            {/* right section */}
                            <div onClick={() => {
                                if (captureNum < (capture.length - 1)) {
                                    setCaptureNum((pre) => pre + 1);
                                }
                            }}></div>
                        </div>

                        <div className={styles.projectPictureSelectTotalDiv}
                            style={{ display: capture.length > 1 ? 'flex' : 'none' }}>
                            {[...Array(capture.length)].map((_, index) => (
                                <div className={styles.projectPictureSelectDiv}
                                    style={{ backgroundColor: index === captureNum ? '#4D4D4D' : '#C6C6C6' }}
                                    key={index}
                                    onClick={() => {
                                        setCaptureNum(index);
                                    }}>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {/* left 유튜브 */}
                {!imgPage &&
                    <iframe className={styles.projectYouTubeIframe}
                        src={webSite.YouTube}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                }

                {/* right */}
                <div className={styles.rightDiv}>
                    {/* header */}
                    <div className={styles.headerDiv}>
                        <h1>{name}</h1>
                        {webSite.YouTube &&
                            <div className={styles.switchDiv}>
                                {(!leftSwitch && !rightSwitch) &&
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
                                }}>Picture</p>
                                <p onClick={() => {
                                    setImgPage(false);
                                    setLeftSwitch(false);
                                    setRightSwitch(true);
                                }}>youTube</p>
                            </div>
                        }
                        {/* X mark */}
                        <div className={styles.closeIconDiv}
                            onClick={(event) => {
                                event.stopPropagation();
                                scrollAutoFunc();
                                onClose();
                                window.location.hash = 'project';
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

                            <h2>Period</h2>
                            <p>{period}</p>

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
    );
}

export default ProjectModal;
"use client";

import Image from "next/image";
import styles from "./componentsStyles/ProjectModal.module.css"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface ProjectModalProps {
    capture: any[];
    aboutCapture : any[];
    name: string;
    period: string;
    aboutProject: string;
    frontEnd: string;
    mainFunction: string;
    troubleShooting: string;
    MyContributions: string;
    webSite: {
        YouTubeEmbed?: string;
    };
    show: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    capture, aboutCapture, name, period, aboutProject, mainFunction, MyContributions, frontEnd, troubleShooting, webSite, show, onClose
}) => {
    const [captureNum, setCaptureNum] = useState(0);
    const [imgPage, setImgPage] = useState(true);
    const [leftSwitch, setLeftSwitch] = useState(false);
    const [rightSwitch, setRightSwitch] = useState(false);
    const router = useRouter();
    
    const [pageNum, setPageNum] = useState(1);

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
                setCaptureNum(0);
                setImgPage(true);
                setLeftSwitch(false);
                setRightSwitch(false);
                setPageNum(1);

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
                        <div className={styles.aboutCaptureDiv}>
                            <p>{aboutCapture[captureNum]}</p>
                        </div>
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
                        src={webSite.YouTubeEmbed}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                }

                {/* right */}
                <div className={styles.rightDiv}>
                    {/* header */}
                    <div className={styles.headerDiv}>
                        <h1>{name}</h1>
                        {webSite.YouTubeEmbed &&
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
                                }}>Pictures</p>
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
                                setCaptureNum(0);
                                setImgPage(true);
                                setLeftSwitch(false);
                                setRightSwitch(false);
                                setPageNum(1);
                
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
                        <div className={styles.contentGradationDiv}></div>
                            {pageNum == 1 &&
                                <div className={styles.contentDiv2}>
                                    <h2>⭐ 이 프로젝트는</h2>
                                    <p>{aboutProject}</p>

                                    <h2>⭐ 기간</h2>
                                    <p>{period}</p>

                                    <h2>⭐ 기술 스택</h2>
                                    <p>{frontEnd}</p>
                                </div>
                            }

                            {pageNum == 2 &&
                                <div className={styles.contentDiv2}>
                                    <h2>⭐ 주요 기능</h2>
                                    <p>{mainFunction}</p>
        
                                    <h2>⭐ 개발 사항</h2>
                                    <p>{MyContributions}</p>
                                </div>
                            }

                            {pageNum == 3 &&
                                <div className={styles.contentDiv2}>
                                    <h2>💫 트러블 슈팅</h2>
                                    <p>{troubleShooting}</p>
                                </div>
                            }
                    </div>
                    <div className={styles.pageDiv}>
                        {pageNum > 1 &&
                            <div
                            className={styles.pageIconLeft}
                            onClick={() => {setPageNum(pre => pre - 1)}}><AiOutlineLeft size={24} color="#4D4D4D"/></div>
                        }
                        <div className={styles.pageText}>{pageNum} / 3 page</div>
                        {pageNum < 3 &&
                        <div
                            className={styles.pageIconRight}
                            onClick={() => {setPageNum(pre => pre + 1)}}><AiOutlineRight size={24} color="#4D4D4D"/></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
"use client"

import React, { useEffect, useState } from 'react';

import IndividualProject from "./IndividualProject"
import styles from "./componentsStyles/Project.module.css"
import { ProjectArray } from "../array/ProjectArray"

export default function Project() {

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

    return (
        <div className={styles.totalDiv}
            style={{
                "height" : mobileView? `${ProjectArray.length * 66}vh` : `${ProjectArray.length * 35}vw`
            }}>
            <div className={styles.projectBoxDiv}>
                { ProjectArray.map((project, index) => (
                    <IndividualProject
                        key={index}
                        capture = {project.capture}
                        aboutCapture = {project.aboutCapture}
                        name = {project.name}
                        period = {project.period}
                        aboutProject = {project.aboutProject}
                        mainFunction = {project.mainFunction}
                        frontEnd = {project.frontEnd}
                        deployment = {project.deployment}
                        webSite = {project.webSite}
                        etc= {project.etc}
                    />
                ))}
            </div>
        </div>
    )
}

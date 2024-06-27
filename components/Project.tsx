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
                "height" : mobileView? `${ProjectArray.length * 140}vw` : `${Math.round(ProjectArray.length / 2) * 68}vw`
            }}>
            <div className={styles.projectBoxDiv}>
                { ProjectArray.map((project, index) => (
                    <IndividualProject
                        key={index}
                        num = {project.num}
                        mainCapture = {project.mainCapture}
                        capture = {project.capture}
                        aboutCapture = {project.aboutCapture}
                        name = {project.name}
                        period = {project.period}
                        mainAboutProject = {project.mainAboutProject}
                        aboutProject = {project.aboutProject}
                        frontEnd = {project.frontEnd}
                        mainFunction = {project.mainFunction}
                        MyContributions = {project.MyContributions}
                        troubleShooting = {project.troubleShooting}
                        webSite = {project.webSite}
                    />
                ))}
            </div>
        </div>
    )
}

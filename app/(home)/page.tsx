import React from "react";
import Intro from "../../components/Intro";
import Profile from "../../components/Profile";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

export default function Home() {
    return (
        <>
            <div><Intro/></div>
            <div id="profilePage"><Profile/></div>
            <div id="skillPage"><Skill/></div>
            <div id="projectPage"><Project/></div>
        </>
    )
}
import Intro from "../../components/Intro";
import Profile from "../../components/Profile";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

export default function Home() {
    return (
        <>
            <div id="intro"><Intro/></div>
            <div id="profile"><Profile/></div>
            <div id="skill"><Skill/></div>
            <div id="project"><Project/></div>
        </>
    )
}
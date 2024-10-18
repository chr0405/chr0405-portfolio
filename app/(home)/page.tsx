import Intro from "../../components/Intro";
import Profile from "../../components/Profile";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

export default function Home() {
    return (
        <>
            <div id="intro"><Intro/></div>
            <div style={{ backgroundColor: '#1B4669', color: 'transparent', height : '5vw'}}>가벽</div>
            <div id="profile"><Profile/></div>
            <div style={{ backgroundColor: '#668DAE', color: 'transparent', height : '5vw'}}>가벽</div>
            <div id="skill"><Skill/></div>
            <div style={{ backgroundColor: '#B9CEE3', color: 'transparent', height : '5vw'}}>가벽</div>
            <div id="project"><Project/></div>
        </>
    )
}
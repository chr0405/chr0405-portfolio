import Intro from "../../components/Intro";
import Profile from "../../components/Profile";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

export default function Home() {
    return (
        <div>
            <div
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                background: "linear-gradient(to bottom, #3F5D7D 20%, #213447 50%, #3F5D7D 100%)",
                zIndex: -1,
            }}></div>
            <div id="intro"><Intro/></div>
            <div id="profile"><Profile/></div>
            <div id="skill"><Skill/></div>
            <div id="project"><Project/></div>
        </div>
    )
}
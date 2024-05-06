import Intro from "../../components/Intro"
import Profile from "../../components/Profile"
import Project from "../../components/Project"
import Skill from "../../components/Skill"

export default async function Home() {
    return (
        <>
            <Intro/>
            <Profile/>
            <Skill/>
            <Project/>
        </>
    )
}

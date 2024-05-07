import IndividualProject from "./IndividualProject"
import styles from "./componentsStyles/Project.module.css"
import { ProjectArray } from "../array/ProjectArray"

export default function Project() {
    return (
        <div className={styles.totalDiv}>
            <div className={styles.projectBoxDiv}>
                { ProjectArray.map((project, index) => (
                    <IndividualProject
                        key={index}
                        capture = {project.capture}
                        name = {project.name}
                        period = {project.period}
                        aboutProject = {project.aboutProject}
                        webSite = {project.webSite}
                    />
                ))}
            </div>
        </div>
    )
}

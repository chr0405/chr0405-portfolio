interface ProjectModalProps {
    capture : any[];
    name : string;
    period : string;
    aboutProject : string;
    mainFunction : string;
    frontEnd : string;
    deployment : string;
    etc? : {
        notion? : string;
        notionLink? : string;
        aboutNotion? : string;
    }
}

const ProjectModal : React.FC<ProjectModalProps> = ({
        capture, name, period, aboutProject, mainFunction, frontEnd, deployment, etc
    }) => {
    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}

export default ProjectModal;
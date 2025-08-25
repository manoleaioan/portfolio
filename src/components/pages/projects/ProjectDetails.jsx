import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectDetails() {
    const { projectId } = useParams();
    const [ProjectComponent, setProjectComponent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        import(`../Projects/${projectId}/${projectId}.jsx`)
            .then((module) => {
                setProjectComponent(() => module.default);
            })
            .catch(() => {
                navigate('/projects');
                setProjectComponent(null);
            });
    }, [projectId]);


    return ProjectComponent && <ProjectComponent />;
}

export default ProjectDetails;
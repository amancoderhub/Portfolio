import "./Projects.css";
import Card from "./Card";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
    const { projects, loading, error } = useProjects();

    return (
        <section className="Prj" id="project">
            <h1 className="title">&lt; Projects /&gt;</h1>

            {loading && <p className="project-status">Loading projects...</p>}

            {error && (
                <p className="project-status" role="alert">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <div className="Prj-container">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            title={project.name}
                            details={project.description}
                            time={project.created_at}
                            link={project.svn_url}
                            stars={project.stargazers_count}
                            fork={project.forks}
                            lang={project.language}
                            techStack={project.techStack}
                            hostedUrl={project.homepage}
                        />
                    ))}
                </div>
            )}
                <div className="view-more">
                    <a target="_blank" rel="noopener noreferrer" className="btn_shadow explore-btn" href="https://github.com/amancoderhub?tab=repositories">
                        <span>Explore More Projects </span>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
        </section>
    );
};

export default Projects

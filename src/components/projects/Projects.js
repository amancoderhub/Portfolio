import React from 'react'
import './Projects.css'
import Card from "./Card.js"
import ProjectsAPI from "./ProjectsAPI.js"


const Projects = () => {

    const ProjectsData = ProjectsAPI();
    const title_name = "< Projects />"
    return (
        <>
            <section className='Prj' id='project'>
                <h1 className='title'>{title_name}</h1>

                <div className='Prj-container'>
                    {ProjectsData.map((project, index) => {
                        return <Card
                            key={index}
                            title={project.name}
                            details={project.description}
                            time={project.created_at}
                            link={project.svn_url}
                            stars={project.stargazers_count}
                            clone={project.clone_url}
                            fork={project.forks}
                            lang={project.language}
                            techStack={project.techStack}
                            hostedUrl={project.homepage}
                        />
                    })}
                </div>
                <div className="view-more">
                    <a target="_blank" rel="noopener noreferrer" className="btn_shadow explore-btn" href="https://github.com/amancoderhub?tab=repositories">
                        <span>Explore More Projects </span>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Projects
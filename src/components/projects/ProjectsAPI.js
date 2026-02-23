import { useState, useEffect } from "react";
import axios from "axios";

const ProjectsAPI = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await axios.get(
                "https://api.github.com/users/amancoderhub/repos"
            );
            const data = response.data;
            setProjects(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Manual mapping for better tech stack visibility (Frameworks, Libraries, etc.)
    const techStackMapping = {
        "GlobalLodge": ["React", "Node.js", "Express", "MongoDB", "Redux"],
        "HealthNexus": ["React", "Firebase", "Node.js", "Tailwind CSS"],
        "MealMate": ["React", "Express", "Node.js", "MongoDB", "JWT"],
        "Weather-App": ["React", "OpenWeather API", "CSS Modules"],
        "Portfolio": ["React", "Vite", "AOS", "FontAwesome"],
        "DSA": ["C++", "Algorithms", "Data Structures", "STL"],
        "Mini-chatsapp": ["React", "Node.js", "Socket.io", "Express", "WhizChat"]
    };

    // Specific order requested by the user
    const preferredOrder = ["GlobalLodge", "HealthNexus", "MealMate", "Mini-chatsapp", "Portfolio", "Weather-App"];

    const ProjectsData = projects
        .filter((project) => project.stargazers_count >= 0)
        .map((project) => {
            const manualStack = techStackMapping[project.name] || [];
            const topics = project.topics || [];
            const combinedStack = [...new Set([project.language, ...topics, ...manualStack])].filter(Boolean);

            return {
                ...project,
                techStack: combinedStack
            };
        })
        .sort((a, b) => {
            const indexA = preferredOrder.indexOf(a.name);
            const indexB = preferredOrder.indexOf(b.name);

            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return 0;
        })
        .slice(0, 6);

    return ProjectsData;
};

export default ProjectsAPI;

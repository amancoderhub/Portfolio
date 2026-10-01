import { useEffect, useState } from "react";
import { preferredProjectOrder, techStackMapping } from "../data/projectConfig";
import { getGithubRepositories } from "../services/github";

const formatProjects = (projects) =>
  projects
    .map((project) => {
      const manualStack = techStackMapping[project.name] || [];
      const topics = project.topics || [];

      return {
        ...project,
        techStack: [
          ...new Set([project.language, ...topics, ...manualStack]),
        ].filter(Boolean),
      };
    })
    .sort((a, b) => {
      const indexA = preferredProjectOrder.indexOf(a.name);
      const indexB = preferredProjectOrder.indexOf(b.name);

      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    })
    .slice(0, 6);

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError("");
        const repositories = await getGithubRepositories();
        setProjects(formatProjects(repositories));
      } catch {
        setError("Unable to load projects right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;

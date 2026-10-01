import axios from "axios";

const GITHUB_USERNAME = "amancoderhub";

export const getGithubRepositories = async () => {
  const response = await axios.get(
  `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
    {
      params: {
        sort: "updated",
        direction: "desc",
        per_page: 100,
      },
    }
  );

  return response.data;
};

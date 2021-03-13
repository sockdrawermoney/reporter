import github from "octonode";
import config from "../config.json";
const token = process.env.REACT_APP_GITHUB_TOKEN;
const repo = config.repo;

const client = github.client(token);
const ghrepo = client.repo(repo);

const createIssue = async (formData) => {
  const { title, body, labels } = formData;
  try {
    const result = await ghrepo.issueAsync({
      title: title,
      body: body,
      labels: labels,
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export default createIssue;

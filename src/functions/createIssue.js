import github from "octonode";
import config from "../_config/github";

const client = github.client(config.token);
const ghrepo = client.repo(config.repo);

const createIssue = async (formData) => {
  const { title, body } = formData;
  try {
    const result = await ghrepo.issueAsync({
      title: title,
      body: body,
      labels: ["Finding"],
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export default createIssue;

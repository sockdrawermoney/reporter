import github from "octonode";
const token = process.env.REACT_APP_GITHUB_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;

const client = github.client(token);
const ghrepo = client.repo(repo);

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

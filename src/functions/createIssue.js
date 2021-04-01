import { Octokit } from "@octokit/core";
import config from "../../config.json";

const token = process.env.REACT_APP_GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });
const { owner, repo } = config;

const createIssue = async (formData) => {
  const { contest, handle, risk, title, body, labels } = formData;

  try {
    const issueResult = await octokit.request(
      "POST /repos/{owner}/{repo}/issues",
      {
        owner,
        repo,
        title,
        body,
        labels,
      }
    );
    console.log("issueResult", issueResult);

    const issueId = issueResult.data.number;
    const issueUrl = issueResult.data.html_url;
    const message = `${handle} issue #${issueId}`;
    const path = `data/${handle}-${issueId}.json`;

    const fileData = {
      contest,
      handle,
      risk,
      title,
      issueId,
      issueUrl,
    };

    const content = Buffer.from(JSON.stringify(fileData, null, 2)).toString(
      "base64"
    );

    const fileResult = await octokit.request(
      "PUT /repos/{owner}/{repo}/contents/{path}",
      {
        owner,
        repo,
        path,
        message,
        content,
      }
    );

    return {
      file: fileResult,
      issue: issueResult,
    };
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export default createIssue;

const dedent = require("dedent");
const { Octokit } = require("@octokit/core");
const {
  contest,
  sponsor,
  owner,
  repo,
  token,
  apiKey,
  domain,
} = require("./_config");

const octokit = new Octokit({ auth: token });
const mg = require("mailgun-js")({ apiKey, domain });

exports.handler = async (event) => {
  console.log("event", event);
  // only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed",
      headers: { Allow: "POST" },
    };
  }

  const data = JSON.parse(event.body);
  const { email, handle, risk, title, body, labels } = data;

  // ensure we have the data we need
  if (!email || !handle || !risk || !title || !body || !labels) {
    return {
      statusCode: 422,
      body: "Email, handle, risk, title, body, and labels are required.",
    };
  }

  // const recipients = `${email}, submissions@code423n4.com, adamavenir@hey.com`;
  const recipients = `${email}, adamavenir@hey.com`;
  const text = dedent`
  C4 finding submitted:
  
  ${body}
  `;

  const emailData = {
    from: "submissions@code423n4.com",
    to: recipients,
    subject: `C4 ${sponsor} finding: ${title}`,
    text,
  };
  //
  //   try {
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

  return mg
    .messages()
    .send(emailData)
    .then(() => ({
      statusCode: 200,
      body: "Issue posted successfully and confirmation email sent.",
    }))
    .catch((error) => ({
      statusCode: 500,
      body: `Error: ${error}`,
    }));
};

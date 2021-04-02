require("dotenv").config();

module.exports = {
  contest: process.env.REACT_APP_C4_CONTEST,
  sponsor: process.env.REACT_APP_C4_SPONSOR,
  owner: process.env.GITHUB_OWNER,
  repo: process.env.GITHUB_REPO,
  token: process.env.GITHUB_TOKEN,
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
};

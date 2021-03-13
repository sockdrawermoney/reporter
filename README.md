# ⚠️ issuemaker

Serverless React app for submitting _templatized_ (soon) GitHub issues to a configured public or private repo.

It's mostly intended to be used as a reference for doing more interesting things with the GitHub API in a way that's easily deployable to Netlify. (Uses lambda functions.)

### Configuration

1. Configure .env with a [GitHub token](https://github.com/settings/tokens) for local dev or set a Netlify environment variable for production.
2. Set desired repo in `/src/_config/github.js`

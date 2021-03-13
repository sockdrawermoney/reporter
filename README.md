# ⚠️ issuemaker

Serverless React app for submitting _templatized_ (soon) GitHub issues to a configured public or private repo.

It's mostly intended to be used as a reference for doing more interesting things with the GitHub API in a way that's easily deployable to Netlify. (Uses lambda functions.)

### Dev configuration

1. Set [GitHub token](https://github.com/settings/tokens) in .env (see `.env.example`)
2. Set desired repo in src/config.json (e.g. `adamavenir/issuemaker`)
3. Configure form fields in src/config.json

### Production configuration

Add Netlify deploy variables:

- `REACT_APP_GITHUB_TOKEN`
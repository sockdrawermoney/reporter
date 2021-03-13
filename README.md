# ⚠️ issuemaker

Serverless React app for submitting _templatized_ (soon) GitHub issues to a configured public or private repo.

It's mostly intended to be used as a reference for doing more interesting things with the GitHub API in a way that's easily deployable to Netlify. (Uses lambda functions.)

### Dev configuration

See `.env.example`

1. Set [GitHub token](https://github.com/settings/tokens) in .env
2. Set desired repo in .env (e.g. `adamavenir/issuemaker`)

### Production configuration

Add Netlify deploy variables:

- `REACT_APP_GITHUB_TOKEN`
- `REACT_APP_GITHUB_REPO`
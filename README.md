# ⚠️ issuemaker

Serverless React app for submitting **templatized GitHub issues** to a configured public or private repo.

It's mostly intended to be used as a reference for doing more interesting things with the GitHub API in a way that's easily deployable to Netlify. (Uses lambda functions.)

### Dev configuration

1. Set [GitHub token](https://github.com/settings/tokens) in .env (see `.env.example`)
2. Set desired repo in src/config.json (e.g. `adamavenir/issuemaker`)
3. Configure form fields in src/config.json

### Production configuration

Add Netlify deploy variables:

- `REACT_APP_GITHUB_TOKEN`

### Configuration

You _must_ pick one field to be named `title`, which will become the issue's title.

To _can_ set a `labelAll` to be applied to all submitted issues.

You can _also_ pick an additional field to be named `label` in order to predefine a set of option labels as select options or to allow an open-ended label field. (The latter seems a little nuts, but hey, you do you.)

The rest of the fields will get added to the body. Each subsection of the body will start with a markdown header h2 that will use the label of that field.
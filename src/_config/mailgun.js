import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.REACT_APP_MAILGUN_KEY,
  domain: process.env.REACT_APP_MAILGUN_DOMAIN,
});

export default mg;

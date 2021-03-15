import mg from "../_config/mailgun";

const sendEmail = (data) => {
  const { from, to, subject, text, html, attachment } = data;
  const email = { from, to, subject, text, html, attachment };

  return mg.messages().send(email);
};

export default sendEmail;

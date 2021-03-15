import dedent from "dedent";
import sendEmail from "../functions/send-mail";

const sendIssueCopy = (title, body, recipient) => {
  const text = dedent`
  Order details:

  ${body}
  `;

  sendEmail({
    from: "PERSON <email@email.com>",
    to: { recipient },
    subject: `{title}`,
    text,
  });
};

export default sendIssueCopy;

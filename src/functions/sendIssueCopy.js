import dedent from "dedent";
import sendEmail from "./sendEmail";

const sendIssueCopy = (title, body, sponsor, recipient) => {
  // TODO: uncomment first line
  // const recipients = `${recipient}, submissions@code423n4.com, adamavenir@hey.com`;
  const recipients = `${recipient}, adamavenir@hey.com`;
  const text = dedent`
  C4 finding submitted:

  ${body}
  `;

  sendEmail({
    from: "submissions@code423n4.com",
    to: recipients,
    subject: `C4 ${sponsor} finding: ${title}`,
    text,
  });
};

export default sendIssueCopy;

import dedent from "dedent";
import sendEmail from "../functions/send-mail";

const sendIssueCopy = (title, body, recipient) => {
  const text = dedent`
  C4 finding submitted:

  ${body}
  `;

  sendEmail({
    from: "submissions@code423n4.com",
    to: { recipient },
    subject: `C4 finding: {title}`,
    text,
  });
};

export default sendIssueCopy;

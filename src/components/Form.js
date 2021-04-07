import React, { useState } from "react";
import { omit, find } from "lodash";
import config from "../config.json";
import history from "../utils/history";
import { Widgets } from "./widgets";

const contest = process.env.REACT_APP_C4_CONTEST;
const sponsor = process.env.REACT_APP_C4_SPONSOR;

const initialState = {
  status: "unsubmitted",
  title: "",
  email: "",
  handle: "",
  address: "",
  details:
    "## Impact\n\nProvide a detailed description of the impact this bug/vulnerability has on the overall system under test.\n\n## Proof of Concept\n\nProvide screenshots, logs, or any other relevant proof that illustrates the concept of the bug/vulnerability you have identified.\n\n## Tools Used\n\nDescribe the tools used throughout your testing and analysis process.\n\n## Recommended Mitigation Steps\n\nDescribe the recommended steps that a project should use to mitigate the bugs or vulnerabilities you have identified.",
};

const Form = () => {
  const [state, setState] = useState(initialState);

  const fields = config.fields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const url = `/.netlify/functions/submit-finding`;

  const submitFinding = async (url, data) => {
    setState({
      ...state,
      status: "submitting",
    });
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setState({
        ...state,
        status: "submitted",
      });
      return history.push("/success");
    } else {
      history.push("/error");
      setState({
        ...state,
        status: "error",
      });
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
  };

  // body contains everything in state except title, label, and status

  // TODO filter out email, eth address, and possibly handle
  // TODO add eth address to data blob
  const bodyFields = omit(
    state,
    "title",
    "status",
    "label",
    "email",
    "address"
  );
  // const bodyFields = omit(state, "title", "status", "label");

  let markdownBody = [];

  Object.keys(bodyFields).forEach((key) => {
    const fieldOpts = find(fields, { name: key });
    const input = bodyFields[key];
    markdownBody.push(`# ${fieldOpts.label}\n\n${input}\n\n`);
  });

  const labelSet = [
    config.labelAll ? config.labelAll : "",
    state.label ? state.label : "",
  ];

  let risk;
  if (state.label) {
    risk = state.label.slice(0, 1);
  }

  const formData = {
    email: state.email,
    handle: state.handle,
    address: state.address,
    risk,
    title: state.title,
    body: markdownBody.join("\n"),
    labels: labelSet,
  };

  const handleSubmit = () => {
    submitFinding(url, formData);
  };

  const handleReset = () => {
    history.push("/");
    setState({
      ...state,
      title: "",
      details:
        "## Impact\n\nProvide a detailed description of the impact this bug/vulnerability has on the overall system under test.\n\n## Proof of Concept\n\nProvide screenshots, logs, or any other relevant proof that illustrates the concept of the bug/vulnerability you have identified.\n\n## Tools Used\n\nDescribe the tools used throughout your testing and analysis process.\n\n## Recommended Mitigation Steps\n\nDescribe the recommended steps that a project should use to mitigate the bugs or vulnerabilities you have identified.",
      status: "unsubmitted",
    });
  };

  return (
    <div className={"form-" + state.status}>
      <a href="https://code423n4.com">
        <img src="/logo.png" className="logo" width="60" alt="C4" />
      </a>
      <h1>{sponsor} contest finding</h1>
      <form>
        <input type="hidden" id="contest" name="contest" value={contest} />
        <Widgets fields={fields} onChange={handleChange} fieldState={state} />
        <button type="button" onClick={handleSubmit}>
          Create issue
        </button>
      </form>
      <button className="submit-another" type="button" onClick={handleReset}>
        Submit another
      </button>
    </div>
  );
};

export default Form;

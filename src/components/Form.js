import React, { useState } from "react";
import { omit, find } from "lodash";
import config from "../config.json";
import history from "../utils/history";
import createIssue from "../functions/createIssue";
import { Widgets } from "./widgets";

const Form = () => {
  const [state, setState] = useState({
    status: "unsubmitted",
  });

  const fields = config.fields;

  const handleChange = (e) => {
    const { target } = e;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  // body contains everything in state except title, label, and status
  const bodyFields = omit(state, "title", "status", "label");

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

  const formData = {
    contest: state.contest,
    handle: state.handle,
    risk: state.risk,
    title: state.title,
    body: markdownBody.join("\n"),
    labels: labelSet,
  };

  const handleSubmit = () => {
    createIssue(formData).then((result) => {
      if (!result.statusCode || result.statusCode === 200) {
        setState({
          ...state,
          status: "submitted",
        });
        return history.push("/success");
      } else {
        console.error(result.statusCode, result.message);
        history.push("/500");
        setState({
          ...state,
          status: "error",
        });
      }
    });
  };

  return (
    <div className={"form-" + state.status}>
      <h1>New finding</h1>
      <form>
        <input
          type="hidden"
          id="contest"
          name="contest"
          value={config.contest}
        />
        <Widgets fields={fields} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          Create issue
        </button>
      </form>
    </div>
  );
};

export default Form;

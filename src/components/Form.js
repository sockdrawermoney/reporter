import React, { useState } from "react";
import config from '../config.json';
import history from "../utils/history";
import createIssue from "../functions/createIssue";
import { Widgets } from "./widgets";

const Form = () => {
  console.log(config);
  console.log('repo', config.repo);
  console.log('fields', config.fields);
  const [state, setState] = useState({
    title: "",
    body: "",
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

  const formData = {
    title: state.title,
    body: state.body,
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
      <h1>
        New <a href={"https://github.com/" + config.repo}>{config.repo}</a>{" "}
        issue
      </h1>
      <form>
        <Widgets fields={fields} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          Create issue
        </button>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import "./styles/App.css";
import Form from "./components/Form";
import DefaultLayout from "./layouts/DefaultLayout";
import config from "./config.json";

const sponsor = config.sponsor;

function App() {
  return (
    <DefaultLayout pageTitle={"C4 " + sponsor + " contest finding"}>
      <div className="App">
        <Form />
      </div>
    </DefaultLayout>
  );
}

export default App;

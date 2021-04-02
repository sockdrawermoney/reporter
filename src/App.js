import React from "react";
import "./styles/App.css";
import Form from "./components/Form";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <DefaultLayout pageTitle={"C4 contest finding submission"}>
      <div className="App">
        <Form />
      </div>
    </DefaultLayout>
  );
}

export default App;

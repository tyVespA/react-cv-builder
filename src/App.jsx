import React from "react";
import { useState } from "react";
import "./App.css";
import CvBuilder from "./components/CvBuilder";
import CvDisplayer from "./components/CvDisplayer";

function App() {
  const [name, setName] = React.useState("");
  return (
    <main>
      <h1>Cv builder</h1>
      <div className="main-body">
        <CvBuilder setName={setName} />
        <CvDisplayer name={name} />
      </div>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import CvBuilder from "./components/CvBuilder";
import CvDisplayer from "./components/CvDisplayer";

function App() {
  return (
    <main>
      <h1>Cv builder</h1>
      <div className="main-body">
        <CvBuilder />
        <CvDisplayer />
      </div>
    </main>
  );
}

export default App;

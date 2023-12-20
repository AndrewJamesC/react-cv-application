import React from "react";
import ReactDOM from "react-dom/client";
import PersonalDetails from "../components/PersonalDetails.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersonalDetails />
    <Education />
    <Experience />
  </React.StrictMode>
);

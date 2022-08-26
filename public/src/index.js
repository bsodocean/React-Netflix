import React from "react";
import ReactDOM from "react-dom/client";
import "./Fonts/netflixsans-bold-webfont.woff";
import "./Fonts/netflixsans-light-webfont.woff";
import "./Fonts/netflixsans-medium-webfont.woff";
import "./Fonts/netflixsans-regular-webfont.woff";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

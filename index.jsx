import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import React from "react";

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(
    <React.StrictMode><App /></React.StrictMode>
);

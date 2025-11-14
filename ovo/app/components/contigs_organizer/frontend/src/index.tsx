import React from "react";
import { createRoot } from 'react-dom/client';
import StreamlitWrapper from "./StreamlitWrapper";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StreamlitWrapper />
  </React.StrictMode>
);
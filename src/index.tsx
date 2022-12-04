import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Component } from "./Component";

import './global.css';

const APP_ROOT_ID = 'root';

const rootElement = document.getElementById(APP_ROOT_ID);
const root = createRoot(rootElement as Element);

root.render(
    <StrictMode>
      <Component />
    </StrictMode>
  );
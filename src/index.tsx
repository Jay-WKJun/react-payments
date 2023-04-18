import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Dev } from './Dev';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Dev />
  </React.StrictMode>
);

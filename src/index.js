import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './components/calculator.js';
import './index.css'

//Render app to webpage
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Calculator/>);
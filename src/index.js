import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import Game from './components/game.js'

const element = React.createElement(
    'div',
    {},             
    "Hello World!"
  );
const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
// root.render(element);
root.render(<Game/>);   

import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store';
import '../public/style.css';
import Paths from './components/Paths';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Paths />);

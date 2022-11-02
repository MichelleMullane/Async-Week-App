import React from 'react';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import '../public/style.css';
import Paths from './components/Paths';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Paths />
  </Provider>
);

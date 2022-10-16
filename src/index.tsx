import React from 'react';
import ReactDOM from 'react-dom/client';

export * from './components/Button/index';
export * from './components/Badge/index';
export * from './components/Typography/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
    </div>
  </React.StrictMode>
);

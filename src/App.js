import React from 'react';
import logo from './logo.svg';
import './App.css';

import { usePWAInstall } from 'react-use-pwa-install';

function App() {
  const install = usePWAInstall();
  return (
    <div className="App">
      

      <h1>PWA install demo</h1>
      <p>
        If applicable install button will appear below. Check out{" "}
        <a href="https://github.com/FilipChalupa/react-use-pwa-install#readme">
          README
        </a>{" "}
        for more information.
      </p>
      {install && <button onClick={install}>Install</button>}

    </div>
  );
}

export default App;

import React from 'react';
import Home from './containers/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

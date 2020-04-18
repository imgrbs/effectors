import React from 'react';
import Home from './containers/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    <div>
      <head>
        <meta charSet="UTF-8" />
        <title>Effectors - IMGRBS</title>
        <link rel="icon" href='logo.png' />
      </head>
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

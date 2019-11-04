import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotate from 'react-rotation';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Rotate>
          <img src="https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2017/05/iStock-486724980.jpg?x91200" className="App-logo" alt="logo" />
        </Rotate>,
          document.querySelector('.container')
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

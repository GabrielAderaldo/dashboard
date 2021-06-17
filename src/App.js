import './App.css';
import React,{ createContext,useContext } from 'react';
import Login from './components/login';
import Routes from "./router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes/>
      </header>  
    </div>
  );
}


export default App;

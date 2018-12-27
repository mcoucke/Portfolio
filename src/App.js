import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboutPage from "./pages/AboutPage/AboutPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AboutPage/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboutPage from "./pages/AboutPage/AboutPage";
import './App.css';
import StudiesPage from "./pages/StudiesPage/StudiesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AboutPage/>
        <StudiesPage/>
      </div>
    );
  }
}

export default App;

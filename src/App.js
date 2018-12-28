import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboutPage from "./pages/AboutPage/AboutPage";
import StudiesPage from "./pages/StudiesPage/StudiesPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AboutPage/>
        <StudiesPage/>
        <ProjectsPage/>
      </div>
    );
  }
}

export default App;

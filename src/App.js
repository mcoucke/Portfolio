import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutAnimation from "./components/AboutAnimation/AboutAnimation";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import StudiesAnimation from "./components/StudiesAnimation/StudiesAnimation";
import ProjectsAnimation from "./components/ProjectsAnimation/ProjectsAnimation";
import './styles/App.css';

const ScrollPointer = styled.div`
    float:"left";
    clear: "both";
    `;


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showStudies: false,
            showProjects: false,
            scrollTo: 0, // 0 : About, 1 : Studies
        };
    };
    _showStudies = () => {
        this.setState({
            showStudies: true
        });
        this.scrollTo = 0;
    };

    _showProjects = () => {
        this.setState({
            showStudies: true,
            showProjects: true
        });
        this.scrollTo = 1;
    };

    scrollToElement = () => {
        if (this.scrollTo === 0) {
            this.scrollStudies.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
        }
        else if (this.scrollTo === 1) {
            this.scrollProjects.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
        }
    };

    componentDidMount() {
        this.scrollToElement();
    }

    componentDidUpdate() {
        this.scrollToElement();
    }

    render() {
        return (
          <div className="App">
              <Header actionStudies={this._showStudies.bind()}
                      actionProjects={this._showProjects.bind()}
              />
              <AboutAnimation>
                  <ScrollButton text={"Mon parcours"} action={this._showStudies.bind()}/>
              </AboutAnimation>

              { this.state.showStudies && (
                  <StudiesAnimation>
                      <ScrollButton text={"Mes réalisations"} action={this._showProjects.bind()}/>
                  </StudiesAnimation>
              )}

              <ScrollPointer ref={(el) => { this.scrollStudies = el; }} />

              { this.state.showProjects && (
                  <ProjectsAnimation>
                  </ProjectsAnimation>
              )}

              <ScrollPointer ref={(el) => { this.scrollProjects = el; }} />

          </div>
        );
    };
}

export default App;

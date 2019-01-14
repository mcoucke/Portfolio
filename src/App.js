import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutAnimation from "./components/AboutAnimation/AboutAnimation";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import StudiesAnimation from "./components/StudiesAnimation/StudiesAnimation";
import ProjectsAnimation from "./components/ProjectsAnimation/ProjectsAnimation";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";

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
            width: window.innerWidth,
        };
    };
    _showStudies = () => {
        this.setState({
            showStudies: true,
            width: window.innerWidth
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
            if(window.innerWidth <= 500){ //mobile
                this.scrollStudiesMobile.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
                console.log("da");
            }
            else {
                this.scrollStudies.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
            }
        }
        else if (this.scrollTo === 1) {
            this.scrollProjects.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
        }
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
        this.scrollToElement();
    }

    componentDidUpdate() {
        this.scrollToElement();
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        return (
          <div className="App">
              <BackgroundAnimation/>
              <Header actionStudies={this._showStudies.bind()}
                      actionProjects={this._showProjects.bind()}
              />


              <AboutAnimation>
                  <ScrollButton id={0} text={"Mon parcours"} action={this._showStudies.bind()}/>
              </AboutAnimation>

              <ScrollPointer ref={(el) => { this.scrollStudiesMobile = el; }} />


              { this.state.showStudies && (
                  <div>
                      <StudiesAnimation>
                      </StudiesAnimation>
                      <ScrollButton id={1} text={"Mes réalisations"} action={this._showProjects.bind()}/>
                  </div>
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

import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboutAnimation from "./components/AboutAnimation/AboutAnimation";
import AboutButton from "./components/AboutButton/AboutButton";
import StudiesAnimation from "./components/StudiesAnimation/StudiesAnimation";
import ProjectsAnimation from "./components/ProjectsAnimation/ProjectsAnimation";
import ContactPage from "./pages/ContactPage/ContactPage";
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showStudies: false,
            showProjects: false,
            showContact: false,
            scrollTo: 0, // 0 : About, 1 : Studies, 2 : Contact
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
            showProjects: true
        });
        this.scrollTo = 1;
    };

    _showContact = () => {
        this.setState({
            showContact: true
        });
        this.scrollTo = 2;
    };

    scrollToElement = () => {
        if (this.scrollTo === 0) {
            this.scrollStudies.scrollIntoView({ behavior: "smooth" });
        }
        else if (this.scrollTo === 1) {
            this.scrollProjects.scrollIntoView({ behavior: "smooth" });
        }
        else if (this.scrollTo === 2) {
            this.scrollContact.scrollIntoView({ behavior: "smooth" });
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
              <Header/>
              <AboutAnimation>
                  <AboutButton text={"Voir mon parcours"} action={this._showStudies.bind()}/>
              </AboutAnimation>

              { this.state.showStudies && (
                  <StudiesAnimation>
                      <AboutButton text={"Voir mes réalisations"} action={this._showProjects.bind()}/>
                  </StudiesAnimation>
              )}

              <div style={{ float:"left", clear: "both", }}
                   ref={(el) => { this.scrollStudies = el; }}>
              </div>

              { this.state.showProjects && (
                  <ProjectsAnimation>
                      <AboutButton text={"Me contacter"} action={this._showContact.bind()}/>
                  </ProjectsAnimation>
              )}

              <div style={{ float:"left", clear: "both", }}
                   ref={(el) => { this.scrollProjects = el; }}>
              </div>

              { this.state.showContact && (
                  <ContactPage/>
              )}

              <div style={{ float:"left", clear: "both", }}
                   ref={(el) => { this.scrollContact = el; }}>
              </div>
          </div>
        );
    };
}

export default App;

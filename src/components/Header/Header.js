import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from "react-motion";

const Container = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: ${(props) => props.height}rem;
    `;

const Section = styled.div`
    color: #E64A19;
    font-size: 1.5rem;
    display: ${(props) => props.display};
    opacity: ${(props) => props.opacity};
    padding: 1.5rem;
    cursor: pointer;
    `;

const Title = styled.div`
    color: #E64A19;
    font-size: 1.5rem;
    display: ${(props) => props.display};
    opacity: ${(props) => props.opacity};
    padding: 1.5rem;
    margin-right: auto;
    `;

class Header extends React.Component {
    constructor(props){
        super(props);
        this.showStudies = props.actionStudies;
        this.showProjects = props.actionProjects;
    }

    render() {
      return (
          <Motion
              defaultStyle={{height: 0}}
              style={{height: spring(5, { stiffness: 60, damping: 30 })}}
          >
              {(style) => (
                  <Container height={style.height}>
                      <Title display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}>
                          Portfolio
                      </Title>
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}
                               onClick={this.showStudies}>
                          Parcours
                      </Section>
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}
                               onClick={this.showProjects}>
                          Réalisations
                      </Section>

                  </Container>
              )}
          </Motion>
      );
    }
  }

export default Header;
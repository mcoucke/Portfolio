import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from "react-motion";

const Container = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #E64A19;
    height: ${(props) => props.height}rem;
    `;
//height -> 0 à 5 rem
const Section = styled.div`
    color: #000000;
    font-size: 1.5rem;
    display: ${(props) => props.display};
    opacity: ${(props) => props.opacity};
    padding: 1.5rem;
    margin: auto;
    `;
//display : none à block quand nav height a 5

class Header extends React.Component {
    render() {
      return (
          <Motion
              defaultStyle={{height: 0}}
              style={{height: spring(5, { stiffness: 60, damping: 6 })}}
          >
              {(style) => (
                  <Container height={style.height}>
                      <div />
                      <Section display={ style.height >= 4 ? 'block' : 'none' }
                               opacity={ style.height >= 4 ? 1 : 0}>
                          À propos
                      </Section>
                      <Section display={ style.height >= 4 ? 'block' : 'none' }
                               opacity={ style.height >= 4 ? 1 : 0}>
                          Parcours
                      </Section>
                      <Section display={ style.height >= 4 ? 'block' : 'none' }
                               opacity={ style.height >= 4 ? 1 : 0}>
                          Réalisations
                      </Section>
                      <Section display={ style.height >= 4 ? 'block' : 'none' }
                               opacity={ style.height >= 4 ? 1 : 0}>
                          Contact
                      </Section>
                      <div />

                  </Container>
              )}
          </Motion>
      );
    }
  }

export default Header;
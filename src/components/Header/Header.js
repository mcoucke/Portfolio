import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from "react-motion";

const Container = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: ${(props) => props.height}rem;
    `;
//height -> 0 à 5 rem
const Section = styled.div`
    color: #E64A19;
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
              style={{height: spring(5, { stiffness: 100, damping: 5 })}}
          >
              {(style) => (
                  <Container height={style.height}>
                      <div />
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}>
                          À propos
                      </Section>
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}>
                          Parcours
                      </Section>
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}>
                          Réalisations
                      </Section>
                      <Section display={ style.height >= 0 ? 'block' : 'none' }
                               opacity={style.height/5}>
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
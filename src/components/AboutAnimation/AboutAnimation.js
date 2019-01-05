import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from "react-motion";
import './style.css';

const Container = styled.div`
    display: flex;
    padding-top: 10rem;
    flex: 0 1 auto;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    flex-direction: column;
    `;

class AboutAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <StaggeredMotion
                defaultStyles={[
                    {currentOpacity: 0},
                    {currentOpacity: 0},
                    {currentOpacity: 0},
                    {currentOpacity: 0},
                ]}
                styles={(prevStyles) => [
                    {currentOpacity: spring(1, { stiffness: 50, damping: 35 })},
                    {currentOpacity: spring(prevStyles[0].currentOpacity, { stiffness: 100, damping: 30 })},
                    {currentOpacity: spring(prevStyles[1].currentOpacity, { stiffness: 100, damping: 30 })},
                    {currentOpacity: spring(prevStyles[2].currentOpacity, { stiffness: 100, damping: 30 })},
                ]}
            >
                {(styles) => (
                    <Container>
                        <h1 style={{opacity: styles[0].currentOpacity}}>Maxime COUCKE</h1>
                        <h2 style={{opacity: styles[1].currentOpacity}}>Étudiant en Informatique</h2>
                        <p style={{opacity: styles[2].currentOpacity}}>
                            Actuellement en Licence 3 Ingénierie informatique à l'Université d'Orléans</p>
                        <p style={{opacity: styles[3].currentOpacity}}>
                            J'étudie toute sorte de technologies : Développement logiciel, web, mobile </p>
                        {children}
                    </Container>
                )}
            </StaggeredMotion>
        );
    }
}

export default AboutAnimation;
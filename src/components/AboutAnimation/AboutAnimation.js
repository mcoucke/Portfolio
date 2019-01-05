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

const Text = styled.p`
    opacity: ${(props) => props.opacity};
    font-weight: 300;
    `;

class AboutAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <StaggeredMotion
                defaultStyles={[
                    {opacity: 0},
                    {opacity: 0},
                    {opacity: 0},
                    {opacity: 0},
                ]}
                styles={(prevStyles) => [
                    {opacity: spring(1, { stiffness: 50, damping: 35 })},
                    {opacity: spring(prevStyles[0].opacity, { stiffness: 100, damping: 30 })},
                    {opacity: spring(prevStyles[1].opacity, { stiffness: 100, damping: 30 })},
                    {opacity: spring(prevStyles[2].opacity, { stiffness: 100, damping: 30 })},
                ]}
            >
                {(styles) => (
                    <Container>
                        <h1 style={{opacity: styles[0].opacity}}>Maxime COUCKE</h1>
                        <h2 style={{opacity: styles[1].opacity}}>Étudiant en Informatique</h2>
                        <Text opacity={styles[2].opacity}>
                            Actuellement en Licence 3 Ingénierie informatique à l'Université d'Orléans</Text>
                        <Text opacity={styles[3].opacity}>
                            J'étudie toute sorte de technologies : Développement logiciel, web, mobile </Text>
                        {children}
                    </Container>
                )}
            </StaggeredMotion>
        );
    }
}

export default AboutAnimation;
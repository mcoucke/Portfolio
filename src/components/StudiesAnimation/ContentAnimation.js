import React from 'react';
import styled from 'styled-components';
import {spring, StaggeredMotion} from "react-motion";
import IconsAnimation from "./IconsAnimation";
import './style.css';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `;

const Bloc = styled.div`
    opacity: ${(props) => props.opacity};
    margin: 0 2rem 0 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    `;

const TechContainer = styled.div`
    opacity: ${(props) => props.opacity};
    margin-top: 5rem;
    `;

const Title = styled.p`
    width: 100%;
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 300;
    `;

const Diploma = styled.p`
    color: #FF5722;
    `;

const Year = styled.p`
    font-weight: 900;
    `;

class ContentAnimation extends React.Component {
    constructor(props){
        super(props);
        this.bg_color = props.bg_color;
    }
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
                    {opacity: spring(prevStyles[0].opacity, { stiffness: 50, damping: 35 })},
                    {opacity: spring(prevStyles[1].opacity, { stiffness: 80, damping: 35 })},
                    {opacity: spring(prevStyles[2].opacity, { stiffness: 150, damping: 35 })},
                ]}
            >
                {(styles) => (
                    <div>
                        <Container>
                            <Bloc opacity={styles[0].opacity}>
                                <Year>2016</Year>
                                <Diploma>BAC S - Sciences de l'ingénieur</Diploma>
                                <p>Informatique et sciences du numérique</p>
                            </Bloc>
                            <Bloc opacity={styles[1].opacity}>
                                <Year>2016-2018</Year>
                                <Diploma>DUT Informatique</Diploma>
                                <p>IUT Informatique d'Orléans (45)</p>
                            </Bloc>
                            <Bloc opacity={styles[2].opacity}>
                                <Year>2018-2019</Year>
                                <Diploma>Licence 3 Ingénierie informatique</Diploma>
                                <p>Université d'Orléans (45)</p>
                            </Bloc>
                        </Container>
                        <TechContainer opacity={styles[3].opacity}>
                            <Title>Technologies</Title>
                            <IconsAnimation/>
                        </TechContainer>
                        {children}
                    </div>
                )}
            </StaggeredMotion>
        );
    }
}

export default ContentAnimation;
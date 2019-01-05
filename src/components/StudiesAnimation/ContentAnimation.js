import React from 'react';
import styled from 'styled-components';
import {spring, StaggeredMotion} from "react-motion";
import IconsAnimation from "./IconsAnimation";

const Container = styled.div`
    display: flex;
    height: 100%;
    `;

const Bloc = styled.div`
    opacity: ${(props) => props.opacity};
    margin: auto;
    font-size: 2rem;
    font-weight: 300;
    `;

const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    opacity: ${(props) => props.opacity};
    margin-top: 5rem;
    `;

const Title = styled.p`
    width: 100%;
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 300;
    `;

class ContentAnimation extends React.Component {
    constructor(props){
        super(props);
        this.bg_color = props.bg_color;
    }

    render() {
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
                                <p>2016</p>
                                <p>Baccalauréat Scientifique - Sciences de l'ingénieur</p>
                                <p>Option informatique et sciences du numérique</p>
                            </Bloc>
                            <Bloc opacity={styles[1].opacity}>
                                <p>2016-2018</p>
                                <p>DUT Informatique</p>
                                <p>IUT Informatique - Orléans (45)</p>
                            </Bloc>
                            <Bloc opacity={styles[2].opacity}>
                                <p>2018-2019</p>
                                <p>Licence 3 Informatique - Ingénierie informatique</p>
                                <p>Université - Orléans (45)</p>
                            </Bloc>
                        </Container>
                        <TechContainer opacity={styles[3].opacity}>
                            <Title>Technologies</Title>
                            <IconsAnimation/>
                        </TechContainer>
                    </div>
                )}
            </StaggeredMotion>
        );
    }
}

export default ContentAnimation;
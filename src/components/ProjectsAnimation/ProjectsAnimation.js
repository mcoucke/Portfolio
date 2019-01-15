import React from 'react';
import styled from 'styled-components';
import EntranceAnimation from '../Animations/EntranceAnimation';
import ExitAnimation from "../Animations/ExitAnimation";

const colors = [
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
];

const Container = styled.div`
    margin-bottom: 5rem;
    padding-top: 10rem;
    font-size: 2rem;
    `;

class ProjectsAnimation extends React.Component {
    render() {
        return (
            <div>
                <EntranceAnimation colors={colors} />
                <Container>
                    En développement
                </Container>
                <ExitAnimation colors={colors} />
            </div>
        );
    }
}

export default ProjectsAnimation;
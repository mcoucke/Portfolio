import React from 'react';
import styled from 'styled-components';
import EntranceAnimation from '../Animations/EntranceAnimation';

const colors = [
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
];

const Container = styled.div`
    margin: auto;
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
            </div>
        );
    }
}

export default ProjectsAnimation;
import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from "react-motion";

const colors = [
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
];

const Container = styled.div`
    display: flex;
    width: auto;
    min-height: 100%;
    height: 30rem;
    margin-bottom: 20rem;
    `;

const Box = styled.div`
    flex-basis: ${(props) => props.width}%;
    background: ${(props) => props.bg_color};
    `;

const Content = styled.div`
    flex-basis: 100%;
    background: ${(props) => props.bg_color};
    `;

class ProjectsAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <StaggeredMotion
                defaultStyles={[
                    { width: 0},
                    { width: 100},
                    { width: 100},
                    { width: 100},
                    { width: 100}
                ]}
                styles={(prevStyles) => [
                    { width: spring(0) },
                    { width: spring(prevStyles[0].width) },
                    { width: spring(prevStyles[1].width) },
                    { width: spring(prevStyles[2].width) },
                    { width: spring(prevStyles[3].width) }
                ]}
            >
                {(styles) => (
                    <div>
                        <Container>
                            <Content bg_color={colors[5]}>
                                <p>Projet1</p>
                                <p>Projet2</p>
                                <p>Projet3</p>
                            </Content>
                            <Box bg_color={colors[4]} width={styles[4].width} />
                            <Box bg_color={colors[3]} width={styles[3].width} />
                            <Box bg_color={colors[2]} width={styles[2].width} />
                            <Box bg_color={colors[1]} width={styles[1].width} />
                            <Box bg_color={colors[0]} width={styles[0].width} />
                        </Container>
                        {children}
                    </div>
                )}
            </StaggeredMotion>
        );
    }
}

export default ProjectsAnimation;
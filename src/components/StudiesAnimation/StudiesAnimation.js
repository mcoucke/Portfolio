import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from "react-motion";
import ContentAnimation from "./ContentAnimation";

const colors = [
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
];

const Container = styled.div`
    display: flex;
    width: auto;
    min-height: 100%;
    height: 30rem;
    padding-top: 10rem;
    margin-bottom: 10rem;
    `;

const Box = styled.div`
    padding-top: 10rem;
    flex-basis: ${(props) => props.width}%;
    background: ${(props) => props.bg_color};
    `;

const Content = styled.div`
    flex-basis: 100%;
    `;

class StudiesAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <StaggeredMotion
                defaultStyles={[
                    { width: 100},
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
                            <Box bg_color={colors[4]} width={styles[0].width} />
                            <Box bg_color={colors[3]} width={styles[1].width} />
                            <Box bg_color={colors[2]} width={styles[2].width} />
                            <Box bg_color={colors[1]} width={styles[3].width} />
                            <Box bg_color={colors[0]} width={styles[4].width} />
                            <Content>
                                {styles[4].width <= 5 && (<ContentAnimation/>)}
                            </Content>
                        </Container>
                        {children}
                    </div>
                )}
            </StaggeredMotion>
        );
    }
}

export default StudiesAnimation;
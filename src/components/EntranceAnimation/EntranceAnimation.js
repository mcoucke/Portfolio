import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from "react-motion";

const colors = [
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#E64A19',
];

const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100%;
    `;

const Box = styled.div`
    flex-basis: ${(props) => props.width}%;
    background: ${(props) => props.bg_color};
    `;

const Content = styled.div`
    flex-basis: 100%;
    background: ${(props) => props.bg_color};
    `;

class EntranceAnimation extends React.Component {
    render() {
        const {
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
                    <Container>
                        <Box bg_color={colors[0]} width={styles[0].width} />
                        <Box bg_color={colors[1]} width={styles[1].width} />
                        <Box bg_color={colors[2]} width={styles[2].width} />
                        <Box bg_color={colors[3]} width={styles[3].width} />
                        <Box bg_color={colors[4]} width={styles[4].width} />
                        <Content bg_color={colors[5]}>
                            {children}
                        </Content>
                    </Container>
                )}
            </StaggeredMotion>
        );
    }
}

export default EntranceAnimation;
import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from "react-motion";

const Container = styled.div`
    display: flex;
    padding-top: 10rem;
    `;

const Box = styled.div`
    flex-basis: ${(props) => props.width}%;
    height: 5rem;
    background: ${(props) => props.bg_color};
    `;

class EnterAnimation extends React.Component {
    constructor(props){
        super(props);
        this.colors = props.colors;
    }

    render() {
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
                        <Box bg_color={this.colors[4]} width={styles[0].width} />
                        <Box bg_color={this.colors[3]} width={styles[1].width} />
                        <Box bg_color={this.colors[2]} width={styles[2].width} />
                        <Box bg_color={this.colors[1]} width={styles[3].width} />
                        <Box bg_color={this.colors[0]} width={styles[4].width} />
                    </Container>
                )}
            </StaggeredMotion>
        );
    }
}

export default EnterAnimation;
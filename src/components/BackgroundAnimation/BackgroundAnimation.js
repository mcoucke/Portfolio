import React from 'react';
import styled from 'styled-components';
import './animation.scss';

const Container = styled.div`
    position: fixed;
    z-index: 1;
    width: 500px;
    `;

const Item = styled.div`
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    opacity: 0.6;
    border-radius: 50%;
    background: #E64A19;
    `;

function createItems() {
    let content = [];
    const min = 0;
    const maxleft = window.innerWidth;
    const maxtop = window.innerHeight;
    const classes = ["smallItems", "mediumItems", "largeItems"];
    for(let k = 0; k < 3; k++){
        for(let i = 0; i < 15; i++){
            content.push(
                <Item className={classes[k]}
                      top={Math.round(min + (Math.random() * (maxtop - min)))}
                      left={Math.round(min + (Math.random() * (maxleft - min)))}
                />
            );
            content.push(
                <Item className={classes[k]+2}
                      top={Math.round(min + (Math.random() * (maxtop - min)))}
                      left={Math.round(min + (Math.random() * (maxleft - min)))}
                />
            );
        }
    }
    return content;
}

class BackgroundAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.content = createItems();
    }

    render() {
        return (
            <Container>
                {this.content}
            </Container>
        );
    }
}

export default BackgroundAnimation;
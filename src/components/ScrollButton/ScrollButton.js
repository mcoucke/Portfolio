import React from 'react';
import styled from 'styled-components';


const Button = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    `;


class ScrollButton extends React.Component {
    constructor(props){
        super(props);
        this.showStudies = props.action;
        this.text = props.text;
    }

    render() {
        return (
            <Button onClick={this.showStudies}>{this.text}</Button>
        );
    }
}

export default ScrollButton;
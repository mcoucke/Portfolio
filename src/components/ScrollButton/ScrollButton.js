import React from 'react';
import styled from 'styled-components';


const Button = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 10rem;
    padding-bottom: 1.5rem;
    `;


class ScrollButton extends React.Component {
    constructor(props){
        super(props);
        this.showStudies = props.action;
        this.text = props.text;
        this.id = props.id;
    }

    render() {
        if(this.id === 1){
            return (
                <Button className="scrollProjects" onClick={this.showStudies}>{this.text}</Button>
            );
        }
        return (
            <Button onClick={this.showStudies}>{this.text}</Button>
        );
    }
}

export default ScrollButton;
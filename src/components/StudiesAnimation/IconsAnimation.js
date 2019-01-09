import React from 'react';
import styled from 'styled-components';
import {spring, StaggeredMotion} from "react-motion";
import bootstrap from'../../images/bootstrap.png';
import cakephp from'../../images/cakephp.png';
import cpp from'../../images/cpp.png';
import css from'../../images/css.png';
import html from'../../images/html.png';
import j2ee from'../../images/j2ee.png';
import java from'../../images/java.png';
import jquery from'../../images/jquery.png';
import js from'../../images/js.png';
import linux from'../../images/linux.png';
import materialize from'../../images/materialize.png';
import nodejs from'../../images/nodejs.png';
import php from'../../images/php.png';
import python from'../../images/python.png';
import react from'../../images/react.png';

const Image = styled.img`
    margin: 1rem;
    opacity: ${(props) => props.opacity};
    `;

const Container = styled.div`
    height: 100%;
    `;

class IconsAnimation extends React.Component {
    render() {
        return (
            <StaggeredMotion
                defaultStyles={[
                    {opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0},
                    {opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0},
                    {opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0},
                    {opacity: 0}, {opacity: 0}, {opacity: 0},
                ]}
                styles={(prevStyles) => [
                    {opacity: spring(1, { stiffness: 80, damping: 35 })},
                    {opacity: spring(prevStyles[0].opacity)},
                    {opacity: spring(prevStyles[1].opacity)},
                    {opacity: spring(prevStyles[2].opacity)},
                    {opacity: spring(prevStyles[3].opacity)},
                    {opacity: spring(prevStyles[4].opacity)},
                    {opacity: spring(prevStyles[5].opacity)},
                    {opacity: spring(prevStyles[6].opacity)},
                    {opacity: spring(prevStyles[7].opacity)},
                    {opacity: spring(prevStyles[8].opacity)},
                    {opacity: spring(prevStyles[9].opacity)},
                    {opacity: spring(prevStyles[10].opacity)},
                    {opacity: spring(prevStyles[11].opacity)},
                    {opacity: spring(prevStyles[12].opacity)},
                    {opacity: spring(prevStyles[13].opacity)},
                ]}
            >
                {(styles) => (
                    <Container>
                        <Image className="divicon" opacity={styles[0].opacity} src={php} alt="PHP" />
                        <Image className="divicon" opacity={styles[1].opacity} src={java} alt="Java" />
                        <Image className="divicon" opacity={styles[2].opacity} src={cpp} alt="C++" />
                        <Image className="divicon" opacity={styles[3].opacity} src={js} alt="JavaScript" />
                        <Image className="divicon" opacity={styles[4].opacity} src={python} alt="Python" />
                        <Image className="divicon" opacity={styles[5].opacity} src={html} alt="HTML" />
                        <Image className="divicon" opacity={styles[6].opacity} src={css} alt="CSS" />
                        <Image className="divicon" opacity={styles[7].opacity} src={cakephp} alt="CakePHP" />
                        <Image className="divicon" opacity={styles[8].opacity} src={j2ee} alt="J2EE" />
                        <Image className="divicon" opacity={styles[9].opacity} src={nodejs} alt="Node.js" />
                        <Image className="divicon" opacity={styles[10].opacity} src={react} alt="React" />
                        <Image className="divicon" opacity={styles[11].opacity} src={jquery} alt="jQuery" />
                        <Image className="divicon" opacity={styles[12].opacity} src={linux} alt="Linux" />
                        <Image className="divicon" opacity={styles[13].opacity} src={bootstrap} alt="Bootstrap" />
                        <Image className="divicon" opacity={styles[14].opacity} src={materialize} alt="Materialize" />
                    </Container>
                )}
            </StaggeredMotion>
        );
    }
}

export default IconsAnimation;
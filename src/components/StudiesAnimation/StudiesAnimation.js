import React from 'react';
import ContentAnimation from "./ContentAnimation";
import EntranceAnimation from "../Animations/EntranceAnimation";
import ExitAnimation from "../Animations/ExitAnimation";

const colors = [
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
];

class StudiesAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <div>
                <EntranceAnimation colors={colors} />
                <div>
                    <ContentAnimation>
                        {children}
                    </ContentAnimation>
                </div>
                <ExitAnimation colors={colors} />
            </div>
        );
    }
}

export default StudiesAnimation;
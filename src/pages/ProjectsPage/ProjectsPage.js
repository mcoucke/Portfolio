import React from 'react';
import ExitAnimation from "../../components/ExitAnimation/ExitAnimation";

const ProjectsPage = props => (
    <div className="main-container">
        <ExitAnimation>
            <p>Projet1</p>
            <p>Projet2</p>
            <p>Projet3</p>
        </ExitAnimation>
    </div>
);

export default ProjectsPage;
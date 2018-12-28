import React from 'react';
import './style.css';
import EntranceAnimation from "../../components/EntranceAnimation/EntranceAnimation";

const StudiesPage = props => (
    <div className="main-container">
        <EntranceAnimation>
            <p>Bac</p>
            <p>IUT</p>
            <p>Licence</p>
        </EntranceAnimation>
    </div>
);

export default StudiesPage;
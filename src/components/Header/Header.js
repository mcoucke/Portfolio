import React from 'react';
import './style.css';

class Header extends React.Component {
    render() {
      return (
      <header>
          <div />
          <div className="section">
              <p>À propos</p>
          </div>
          <div className="section">
              <p>Parcours</p>
          </div>
          <div className="section">
              <p>Réalisations</p>
          </div>
          <div className="section">
              <p>Contact</p>
          </div>
          <div />

      </header>
      );
    }
  }

export default Header;
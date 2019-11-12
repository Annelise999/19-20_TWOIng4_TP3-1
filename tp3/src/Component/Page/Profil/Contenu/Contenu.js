import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contenu.css';


class Contenu extends Component {
  render() {
    const contenu = this.props.contenu;
    // PAREIL QUE
    // const { author } = this.props;

    return (
      <div>
        <h4>{contenu.nom}</h4>
        <p>{contenu.prenom}</p>
        <p>{contenu.date}</p>
      </div>
    );
  }
}

export default Contenu;
import React, { Component } from 'react';
import "./Page.css";
import Image from "./BouttonProfil/BouttonProfil";
import Author from "./Like/Like";
import Contenu from "./Profil/Profil";

class Page extends Component {
  render() {

    //const author = this.props.tweetData.author;
    //const content = this.props.tweetData.content;
    //const image = this.props.tweetData.image; 

    // SAME
    const { profil, like } = this.props.pageData;

    return(
      <div className="page-container">
        <Profil profil={profil}/>
        <Like like={like} />
      </div>
    )
  }
}

export default Page;

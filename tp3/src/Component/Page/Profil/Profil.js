import React, { Component } from 'react';
import "./Page.css";


class Profil extends Component {
  render() {

    //const author = this.props.tweetData.author;
    //const content = this.props.tweetData.content;
    //const image = this.props.tweetData.image; 

    // SAME
    const { image, contenu} = this.props.pageData;

    return(
      <div className="page-container">
        <Image image={image}/>
        <Contenu contenu={contenu} />
      </div>
    )
  }
}

export default Page;

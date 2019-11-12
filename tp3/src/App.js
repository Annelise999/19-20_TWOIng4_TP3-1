import React, { Component } from 'react';
import Page from "./Components/Page/Page";
import { isMainThread } from 'worker_threads';

// MES DONNEES



class App extends Component {
    constructor (props)
{
    super (props);    
    this.state = {
        page1: {
            id: 1,
            profil: {
                image: {
                        src: "https://www.google.com/search?q=cam%C3%A9l%C3%A9on&source=lnms&tbm=isch&sa=X&ved=0ahUKEwilr92Z5-LlAhUXDGMBHVOWDTgQ_AUIEigB&biw=1421&bih=679#imgrc=HTA4IprsofIfDM:",
                         alt: "Caméléon"
                        },
                contenu: {
                         prenom: "Marie", 
                         nom: "Charlotte",
                        date: "08/01/1998"
                          },
            },
            
            like: {
              nombre: null
            }
          },

          page2: {
            id: 2,
            profil: {
                image: {
                        src: "https://www.google.com/search?biw=1421&bih=679&tbm=isch&sa=1&ei=3KrJXae_Gr6P1fAP6pOH8Ak&q=kangourou&oq=kangourou&gs_l=img.3..0l10.581326.582256..582460...0.0..0.50.379.9......0....1..gws-wiz-img.......0i67.PNi2j9zaGLM&ved=0ahUKEwinnYib5-LlAhW-RxUIHerJAZ4Q4dUDCAc&uact=5#imgrc=GRhqnm4jxt3aeM:",
                         alt: "Kangourou"
                        },
                contenu: {
                         prenom: "Marine", 
                         nom: "Stadler",
                        date: "21/03/1999"
                          },
            },
            
            like: {
              nombre: null
            }
          },


          page3: {
            id: 3,
            profil: {
                image: {
                        src: "https://www.google.com/search?biw=1421&bih=679&tbm=isch&sa=1&ei=W63JXeaTCI2NlwTNxaXQCg&q=marmotte&oq=marmotte&gs_l=img.3..0l10.3445.4252..4289...0.0..0.170.464.6j1......0....1..gws-wiz-img.......0i67.7U9ES9--zac&ved=0ahUKEwimrc_L6eLlAhWNxoUKHc1iCaoQ4dUDCAc&uact=5#imgrc=Be_RycOe8xzlpM:",
                         alt: "Marmotte"
                        },
                contenu: {
                         prenom: "Sophie", 
                         nom: "Marin",
                        date: "23/04/2009"
                          },
            },
            
            like: {
              nombre: null
            }
          }

    };
}

  render() {
    return (
      <div>
        <h2>MA PAGE WEB</h2>
        <Page pageData={page1} />
        <Page pageData={page2} />
        <Page pageData={page3} />
      </div>
    );
  }
}

export default App;
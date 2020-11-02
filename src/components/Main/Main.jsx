import React, {Component} from 'react';
import logoBootstrap from '../../media/logo/bootstrap4.png';
import imgSass from '../../media/img/sassw.webp';

class Main extends Component {

  render() {
    return(
      <main role="main" className="main container py-3 row" style={{backgroundImage:`url(${imgSass})`}}>
        <section role="article" className="col-sm-10 col-md-4 offset-sm-1 offset-md-1 p-0 mt-5 no-bg-sm">
          <h2 className="py-1">Grille basée sur le Framework Bootstrap</h2>
          <p className="p-3">Grille construite à partir de node-sass*, basée sur Bootstrap*.</p>
             <ul>
               <li className="py-1">col-x • col-sm-x • col-xl-x</li>
               <li className="py-1">offset-x • offset-sm-x • offset-xl-x</li>
               <li className="py-1">padding et margin</li>
               <li className="py-1">display</li>
               <li className="py-1">font-size</li>
               <li className="py-1">format xs a part</li>
             </ul>
          <span className="d-inline-block d-md-none p-3">
            <a href="https://getbootstrap.com/docs/4.0/getting-started/theming/"
               className="link"
               target="_blank"
               rel="noopener noreferrer">
               Voir Bootstrap
            </a>
          </span>
        </section>

        <figure className="d-none d-md-block offset-md-2 offset-lg-3 col-md-5 col-lg-3 center mt-5">
          <a href="https://getbootstrap.com/docs/4.0/getting-started/theming/"
             target="_blank"
             rel="noopener noreferrer">
            <img src={logoBootstrap} alt="logo de Bootstrap" title="se rendre sur Bootstrap"/>
          </a>
          <figcaption className="center mt-1 px-1">Logo de Bootstrap</figcaption>
        </figure>
      </main>
    )
  }
}

export default Main;

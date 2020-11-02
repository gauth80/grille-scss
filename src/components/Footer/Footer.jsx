import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="container row col-12 footer" role="contentinfo">
        <article className="row col-10 offset-1 mt-5">
          <section className="col-10 offset-1 p-3">
            <p className="col-12 sepia">
              Bootstrap : Framework Frontend
            </p>
            <p className="col-12 sepia">
              Node-Sass : Package npm pour sass.
            </p>
          </section>
        </article>
        <article className="row col-12">
          <h3 className="text-xs-3 text-sm-2">Lien utile</h3>
          <section className="col-xs-10 col-sm-4 offset-xs-1 offset-sm-1 offset-md-1 my-5">
            <ul>
              <li>
                <a href="https://www.mozilla.org/fr/firefox/developer/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  Firefox Dev
                </a>
              </li>
              <li>
                <a href="https://sass-lang.com"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  Sass
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/node-sass"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  Node Sass
                </a>
              </li>
            </ul>
          </section>
          <section className="col-xs-10 col-sm-4 offset-xs-1 offset-sm-2 offset-md-2 my-5">
            <ul>
              <li>
                <a href="https://caniuse.com/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  CanIUse
                </a>
              </li>
              <li>
                <a href="https://csstriggers.com"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  Css Triggers
                </a>
              </li>
            </ul>
          </section>
        </article>
        <cite className="xs-center sm-center col-12 py-3">
              Libre source, c'est une grille avec ces défauts parmis tant d'autre.
        </cite>
      </footer>
    )
  }
}

export default Footer;

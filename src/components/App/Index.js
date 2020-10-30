import React, {Component} from 'react';

class Index extends Component {
    obj = {
      test : "teste de grille"
    }

  render () {
    return (
      <main className="container">
        <h3>{this.obj.test}</h3>

        <section className="teste2 row col-12">
          <p className="col-2 d-sm-block d-md-none d-lg-block d-xl-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
             neque explicabo veritatis laudantium, aliquam modi repellat dolores
            incidunt maiores itaque.
          </p>
          <p className="col-2 offset-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
             neque explicabo veritatis laudantium, aliquam modi repellat dolores
            incidunt maiores itaque.
          </p>
          <p className="col-2 offset-2 d-sm-block d-md-none d-lg-block d-xl-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
             neque explicabo veritatis laudantium, aliquam modi repellat dolores
            incidunt maiores itaque.
          </p>
        </section>

        <div className="row col-11 offset-1">
          <button className="btn-success m-1 p-3">Validez</button>
          <button className="btn-danger m-1 p-3">Annulez</button>

        </div>
      </main>
    )
  }
}

export default Index;

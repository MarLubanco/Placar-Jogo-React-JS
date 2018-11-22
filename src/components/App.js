import React from 'react';
import PlacarContainer from './PlacaConteiner'

const Jumbotron = ReactBootstrap.Jumbotron;
const Button = ReactBootstrap.Button;
const dados = {
    partida: {
        estadio: "Maracana",
        data: "02/10/2018",
        horario: "19:00"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Flamengo"
    }
};

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <PlacarContainer tempo={3333} clima={"Nublado"}  {...dados} />
                    <Button bsStyle="primary">Aprenda mais!</Button>
                </Jumbotron>
            </div>
        );
    }
}
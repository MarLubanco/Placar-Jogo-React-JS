import React from '../../../../../.cache/typescript/2.9/node_modules/@types/react';

export default class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador : 0,
        };
    }

    incrementar() {
        this.setState({
            contador : this.state.contador + 1,
        });
    }


    decrementar() {
        this.setState({
            contador : this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button class="form-control" onClick={this.incrementar.bind(this)} >+</button>
                    <button onClick={this.decrementar.bind(this)} >-</button>
                </div>
            </div>
        );
    }

}
import React from 'react';

export default class Partida extends React.Component {
    render() {
        return (
            <div className="modal-dialog">
                <h2> {this.props.estadio} </h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>Hora</span>
                </div>
            </div>
        );
    }
}
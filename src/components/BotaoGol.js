import React from 'react';

export default class BotaoGol extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }


    render() {
        return (
            <div>
            <button className={"btn btn-success"} onClick={this.handleClick.bind(this)}>GOLL </button>
            </div>
        );_
        
    }
}
import React, { Component } from 'react';


class CardSmall extends Component {
    render() {
        
        return (
            <div className="card mb-4 fadeInView">
            <img className="card-img-top" src={ '/img/' + this.props.img } alt={this.props.title} />
            <div className="card-body">
                <p className="card-title">{this.props.title}</p>
                <p className="card-text">{this.props.text}</p>
                <div className="d-flex justify-content-center align-items-center">
                <a href="/" className="btn btn-sm btn-outline-secondary">{this.props.btn}</a>
                </div>
            </div>
            </div>
        );
    }
}

export default CardSmall;
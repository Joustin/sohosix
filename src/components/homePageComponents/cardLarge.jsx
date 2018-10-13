import React, { Component } from 'react';

import {
    Link
  } from 'react-router-dom';

class CardLarge extends Component {
    render() {
        
        return (
            <Link to={'/Releases/' + this.props.link} className=" ">
                <div className="card mb-5 featured-card">
                    <img className="card-img-top" src={ '/img/releases/' + this.props.img } alt={this.props.title} />
                    <div className="card-body">
                        <p className="card-text">{this.props.title}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default CardLarge;
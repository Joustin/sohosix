import React, { Component } from 'react';

import {
    Link
  } from 'react-router-dom';

class CardLarge extends Component {
    render() {
        
        return (
            <div className="card mb-5 featured-card">
                <Link to='/ReleasesFocus' className=" ">
                    <img className="card-img-top" src={ '/img/releases/' + this.props.img } alt={this.props.title} />
                </Link>
                <div className="card-body">
                    <p className="card-text">{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default CardLarge;
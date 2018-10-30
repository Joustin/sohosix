import React, { Component } from 'react';

import axios from 'axios';

import {
    Link
  } from 'react-router-dom';


class ReleasesMain extends Component {

    state = {
        releases: [], 
        loading: true
    } 

    componentDidMount() {

        axios
            //.get('http://localhost:3002/Releases/')
            //.get('http://localhost:5000/Releases/')
            .get('https://soho-six-api.herokuapp.com/Releases/')
            .then(res => {
                const releases = res.data;
                this.setState({
                    releases: releases.Releases,
                    loading: false
                });
            }).catch((error) => {
                console.error(error);
            });
    }

  render() {


    if (this.state.loading) {

        return <div className="loading">
                    <div className="action"></div>
                    <div className="animated fadeInOut text">API WAKING UP</div>
                </div>
    
    } else {    

        return (
            <div>

                <section id="releases">
                    <div className="section-content">
                        <div className="container">

                            <div className="row">

                            {this.state.releases.map( p => ( 

                                <div key={p.id} className="col-md-3">

                                    <Link to={`/Releases/${p.id}`}>
                                        <div className="card mb-4 fadeInView">
                                            <img className="card-img-top" src={ `/img/releases/${p.image}` } alt={`${p.title}`} />
                                            <div className="card-body">
                                                <p className="card-title">{p.artist}</p>
                                                <p className="card-text">{p.title}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>

                            ))}



                            </div>

                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
  }
}

export default ReleasesMain;
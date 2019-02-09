import React, { Component } from 'react';

import axios from 'axios';

import {
    Link
  } from 'react-router-dom';

class ArtistsMain extends Component {

    state = {
        artists: [],
        loading: true
    } 

    componentDidMount() {

        const apiEndpoint = process.env.REACT_APP_MY_API;
        
        axios
            .get(`${apiEndpoint}/Artists/`)
            .then(res => {
                const artists = res.data;
                //console.log(artists);
                this.setState({
                    artists: artists.Artists,
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

                <section id="artists">
                    <div className="section-content">
                        <div className="container">

                                {this.state.artists.map( p => ( 

                                    <div key={p.id} className="row">

                                        <div className="col-md-12">
                                            <Link to={`/Artists/${p.id}`}>
                                                <div className="whiteBox">
                                                    <div className="img-box">
                                                        <img className="img-fluid" src={ `/img/artists/${p.image}` } alt={`${p.name}`} />
                                                    </div>
                                                    <div className="aboutArtist">
                                                        <p className="title">{p.name}</p>
                                                        <p>{p.text}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                
                                
                                ))}

                        </div>
                    </div>
                </section>

                    {/* <ul>

                        {this.state.artists.map( p => (
                            <li key={p.id}>
                                <Link to={`/Artists/${p.id}`}>{p.name}</Link>                       
                            </li>
                        ))}

                    </ul> */}

            </div>
        );
    }
  }
}

export default ArtistsMain;
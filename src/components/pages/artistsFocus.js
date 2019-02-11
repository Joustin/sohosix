import React, { Component } from 'react';

import axios from 'axios';
import Modal from 'react-responsive-modal';

import {
    Link
  } from 'react-router-dom';

const Comp_WhiteBG = "white";

class ArtistsFocus extends Component {


    constructor(props) {
        super(props);

        this.state = { 
            artist: { 
                name: '',
                featuredTracks: [],
                selectedReleases: [], 
                media: []
            },
            loading: true,
            // open: false 
            activeModal: null 
        };

        // this.clickHandler = this.clickHandler.bind(this);
        // this.hideModal = this.hideModal.bind(this);

    }
    

    clickHandler = (e, index) => {
        this.setState({ activeModal: index });
        e.preventDefault();
    }

    hideModal = () => {
        this.setState({ activeModal: null });
    }

    
    // onOpenModal = () => {
    //     this.setState({ open: true });
    //     return false; // prevent href from triggering
    // };
     
    // onCloseModal = () => {
    //     this.setState({ open: false });
    // };



    componentDidMount() {

        const { match: { params } } = this.props;

        const apiEndpoint = process.env.REACT_APP_MY_API;

        axios
            .get(`${apiEndpoint}/Artists/${params.id}`)
            .then(res => {
                const artist = res.data;
                //console.log(artist);
                this.setState({
                    artist: artist,
                    loading: false
                });
            });

        document.body.classList.add(Comp_WhiteBG);
        
        window.scroll({
            top: 0,
            behavior: "smooth"
        }); 

        

    }

    componentWillUnmount() {
        document.body.classList.remove(Comp_WhiteBG);
    }

    

    render() {

        const { artist } = this.state;
        // const { open } = this.state;

        if (this.state.loading) {

            return <div className="loading">
                    <div className="action"></div>
                    <div className="animated fadeInOut text">API WAKING UP</div>
                    </div>

        } else if (artist.name === '') {

            return <div>Sorry, there's a void.  No artist exists.</div>

        } else { 


            return (
                <div className="pageIn">

                <section id="artistFocusTop">
                    <div className="section-content">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-6">
                                    <div key={artist.id} className="img-box">
                                        <img className="img-fluid" src={ `/img/artists/${artist.image}` } alt={`${artist.name}`}  />
                                    </div>

                                    <div className="selectedReleases d-none d-sm-block">
                                        <p>Selected Releases</p>
                                        <div className="row">

                                            {/* Get releases */}

                                            {artist.selectedReleases.map( r => (

                                                <div key={r.id} className="col-sm-4">
                                                    <Link to={`/Releases/${r.link}`}>
                                                        <img className="img-fluid" src={ `/img/releases/${r.image}` } alt={`${r.title}`}  />
                                                    </Link>
                                                </div>

                                            ))}

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <div className="aboutArtist">
                                        <p className="title">{artist.name}</p>
                                        <p>{artist.textFull}</p>
                                    </div>

                                    <div className="featuredTracks">
                                        <p>Featured Tracks</p>

                                        <ul>
                                            {/* Get featured tracks */}
                                            
                                            {artist.featuredTracks.map( track => (

                                                <li key={track.track}>
                                                    <iframe title={`${track.title}`} src={`${track.url}`} seamless>
                                                        <a href={`${track.albumLink}`}>{track.albumTitle}</a>
                                                    </iframe>                      
                                                </li>

                                            ))}

                                        </ul>


                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>             

                <section id="artistFocusBottom">
                    <div className="section-content">
                        <div className="container">

                            <div className="row">
                                <div className="col-sm-12">

                                    <div className="mediaTitle">
                                        <p>Media</p>
                                    </div>

                                </div>

                            </div>

                            <div className="row">


                                {/* Get artist media */}
                                
                                {artist.media.map( (m, index) => (

                                    <div key={m.video} className="col-md-4">
                                        <a href="#" onClick={e => this.clickHandler(e, index)}>
                                            <img className="media img-fluid" src={ `/img/artists/${m.image}` } alt={`${m.title}`}  />
                                        </a>
                                        <Modal open={this.state.activeModal === index} onClose={this.hideModal} center>
                                            <div className="videoModal">
                                                <h4>{m.title}</h4>
                                                <iframe title={`${m.title}`} width="560" height="315" src={`${m.url}`} 
                                                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                            </div>
                                        </Modal>
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

export default ArtistsFocus;
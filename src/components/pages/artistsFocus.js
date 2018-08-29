import React, { Component } from 'react';

import axios from 'axios';
import Modal from 'react-responsive-modal';

const Comp_WhiteBG = "white";

class ArtistsFocus extends Component {


    constructor(props) {
        super(props);

        this.state = { 
            artist: { 
                name: '',
                image2: '',
                featuredTracks: []
            },
            open: false 
        };

    }
    
    componentDidMount() {

        const { match: { params } } = this.props;

        axios
            .get(`http://localhost:3001/Artists/${params.id}`)
            .then(res => {
                const artist = res.data;
                this.setState({
                    artist
                });
            });

        document.body.classList.add(Comp_WhiteBG);    
    }

    componentWillUnmount() {
        document.body.classList.remove(Comp_WhiteBG);
    }

    
    onOpenModal = () => {
        this.setState({ open: true });
        return false; // prevent href from triggering
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {

        const { artist } = this.state;
        const { open } = this.state;


        // console.log("Hello " + artist.featuredTracks);

        return (
            <div>

            <section id="artistFocusTop">
                <div className="section-content">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <div key={artist.id} className="img-box">
                                    <img className="img-fluid" src={ `/img/artists/${artist.image}` } alt={`${artist.name}`}  />
                                </div>

                                <div className="selectedReleases">
                                    Selected Releases

                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="aboutArtist">
                                    <p className="title">{artist.name}</p>
                                    <p>{artist.textFull}</p>
                                </div>

                                <div className="featuredTracks">
                                    Featured Tracks

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

                                <div className="title">
                                    Media
                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-4">
                                <a href="#" onClick={this.onOpenModal}>
                                    <img className="media img-fluid" src="/img/artists/Rusuden_Media_01.jpg" alt={`${artist.name}`}  />
                                </a>
                                {/* <button onClick={this.onOpenModal}>Open modal</button> */}
                                    <Modal open={open} onClose={this.onCloseModal} center>
                                        <h2>Simple centered modal</h2>
                                        <iframe title="YT" width="560" height="315" src="https://www.youtube.com/embed/WByzzzsCQjw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                    </Modal>
                            </div>
                            <div className="col-md-4">

                                <a href="#" onClick={this.onOpenModal}>
                                    <img className="media img-fluid" src="/img/artists/Rusuden_Media_02.jpg" alt={`${artist.name}`}  />
                                </a>
                                <Modal open={open} onClose={this.onCloseModal} center>
                                        <h2>This is a second one</h2>
                                        <iframe title="YT" width="560" height="315" src="https://www.youtube.com/embed/WByzzzsCQjw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                    </Modal>
                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_03.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_04.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_05.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_06.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_07.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_08.jpg" alt={`${artist.name}`}  />

                            </div>
                            <div className="col-md-4">

                                <img className="media img-fluid" src="/img/artists/Rusuden_Media_09.jpg" alt={`${artist.name}`}  />

                            </div>
                        </div>

                    </div>
                </div>
            </section> 


            </div>
        );
    }
}

export default ArtistsFocus;
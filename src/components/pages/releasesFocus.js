import React, { Component } from 'react';

import axios from 'axios';

import {
    Link,
    withRouter
  } from 'react-router-dom';

const Comp_WhiteBG = "white";

class ReleasesFocus extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            release: {
                id: '',
                artist: '',
                title: '',
                tracks: [],
                relatedReleases: []
            }, 
            loading: true
        };

    }


    componentDidMount() {

        const { match: { params } } = this.props;

        axios
            //.get(`http://localhost:3002/Releases/${params.id}`)
            //.get(`http://localhost:5000/Releases/${params.id}`)
            .get(`https://soho-six-api.herokuapp.com/Releases/${params.id}`)
            .then(res => {
                const release = res.data;
                this.setState({
                    release: release, 
                    loading: false
                })
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

    // componentWillReceiveProps(nextProps) {
    //     this.props = nextProps;
    // } 


    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.id !== prevState.id) {
    //       return ({ id: nextProps.id }) // <- this is setState equivalent
    //     }
    // }

    componentDidUpdate(prevProps) {

        //console.log(this.props.match.params.id);

        if (this.props.match.params.id !== prevProps.match.params.id) {

            const { match: { params } } = this.props;

            axios

                .get(`https://soho-six-api.herokuapp.com/Releases/${params.id}`)
                .then(res => {
                    const release = res.data;
                    this.setState({
                        release: release, 
                        loading: false
                    })
                });
    
            //document.body.classList.add(Comp_WhiteBG);
            
            window.scroll({
                top: 0,
                behavior: "smooth"
            }); 

        }

    }    


    render() {

        const { release } = this.state;

        if (this.state.loading) {

            return <div className="loading">
                    <div className="action"></div>
                    <div className="animated fadeInOut text">API WAKING UP</div>
                    </div>

        } else if (release.artist === '') { 

            return <div>Sorry, there's a void.  No release exists.</div>
        
        } else {


            return (
                <div className="pageIn">


                <section id="releaseFocusTop">
                    <div className="section-content">
                        <div className="container">
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div key={release.id} className="img-box">
                                        <img className="img-fluid" src={ `/img/releases/${release.image}` } alt={`${release.title}`}  />
                                    </div>


                                    <div className="streamAlbum d-none d-sm-block">
                                        <p>Stream Album</p>

                                            {/* Stream Album */}
                                            
                                            {release.stream.map( album => (

                                                <iframe key={release.id} style={{ border: 0, width: '100%', height: `${album.height}`  }}
                                                        src={ `https://bandcamp.com/EmbeddedPlayer/album=${album.albumCode}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/` } seamless>
                                                        <a href={album.link}>{album.title} by {album.artist}</a>
                                                </iframe>

                                            ))}

                                    </div>



                                </div>
                                <div className="col-md-6">

                                    <div className="releaseArtist">
                                        <p>{release.artist}</p>
                                    </div>

                                    <div className="releaseTitle">
                                        <p>{release.title}</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="details">
                                                <p>Released {release.date}</p>
                                                <p>{release.cat}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 buy">
                                            <a href={release.buy} target="_blank">BUY</a>
                                        </div>
                                    </div>

                                    <div className="tracklist">
                                        <p>Tracklist</p>
                                        <ol>

                                            {/* Get tracks */}

                                            {release.tracks.map( t => (
                                                
                                                <li key={t.id}>{t.name}</li>

                                            ))}

                                        </ol>
                                    </div>

                                    <div className="releaseAbout">
                                        <p>{release.text}</p>
                                    </div>

                                    <div className="releasestyle">
                                        <p>Style: {release.style}</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <section id="releaseFocusBottom">
                    <div className="section-content">
                        <div className="container">
                        

                            <div className="row">
                                <div className="col-sm-12">

                                    <div className="relatedTitle">
                                        <p>Related Releases</p>
                                    </div>

                                </div>

                            </div>

                            <div className="row">

                            {/* Get related releases */}

                                {release.relatedReleases.map( r => (

                                    <div key={r.id} className="col-md-3">
                                        <Link to={`/Releases/${r.link}`}>
                                            <img className="media img-fluid" src={ `/img/releases/${r.image}` } alt={`${r.title}`}  />
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

export default withRouter(ReleasesFocus);
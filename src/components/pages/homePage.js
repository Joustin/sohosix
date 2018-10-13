import React, { Component } from 'react';

import CardLarge from "../homePageComponents/cardLarge";
import CardSmall from "../homePageComponents/cardSmall";

import Modal from 'react-responsive-modal';

class HomePage extends Component {

    state = {
        open: false,
      };
     
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };


  render() {

    const { open } = this.state;

    return (
        <div>

        <section id="shout-out">
             <div className="section-content">
                 <div className="container">

                     <div className="row">


                        <div className="col-md-6">
                            <CardLarge img="SOL018.jpg" title="Rusuden • Volume 3" link="21" />
                        </div>

                        <div className="col-md-6">
                            {/* <CardLarge img="SOL017.jpg" title="ACEAN • Manhattan" link="20" /> */}
                            <CardLarge img="SOL020.jpg" title="Digalogue • Normal People" link="23" />
                        </div>

                        <div className="col-lg-4">


                            {/* <CardSmall img="home-news_Seal-Beach.jpg" link="" modal="this.onOpenModal" title='Seal Beach 12"' text="This popular record has been sold out for quite some time. Should we repress?" btn="Let us know (email/modal)" /> */}

                            <a href="#" onClick={this.onOpenModal} >
                                <div className="card mb-4 fadeInView">
                                    <img className="card-img-top" src="/img/home-news_Seal-Beach.jpg" alt="Seal Beach 12" />
                                    <div className="card-body">
                                        <p className="card-title">Seal Beach repress?</p>
                                        <p className="card-text">This popular record has been sold out for quite some time. Should we repress?</p>
                                        {/* <div className="d-flex justify-content-center align-items-center">
                                            <a href="/" className="btn btn-sm btn-outline-secondary">Let us know (email/modal)</a>
                                        </div> */}
                                    </div>
                                </div>
                            </a>


                        </div>

                        <div className="col-lg-4">
                            <CardSmall img="home-news_FeIXX171A.jpg" link="4" modal="" title="Rusuden • Fe IX/X 171 A" text='Backstock found of this amazing 12" on blue wax. Do not sleep on this one.' btn="Learn More" />
                        </div>

                        <div className="col-lg-4">
                            <CardSmall img="home-news_AB-cassette.jpg" link="24" modal="" title="Rusuden • A/B (Cassette)" text="Released by Body Control in 2017, new expanded version now available." btn="Buy Now" />
                        </div>

                        <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="sealBeachForm">
                                <h4>Acean - Seal Beach 12"</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <img src="/img/home-news_Seal-Beach_2.jpg"  className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        Are you still looking for Seal Beach on vinyl?  Well, we may end up doing a limited edition repress 
                                        if we see there are enough people who want one!
                                        <br />
                                        <a href="mailto:hellohuman@sohosix.com" target="_blank">Send us an email</a> and let us know. 
                                        If we get enough interest... we'll be in contact.
                                    </div>
                                </div>
                            </div>
                        </Modal>


                      </div>

                 </div>
             </div>
        </section>


        <section id="studio-talk">
            <div className="section-content fadeInView">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-6">
                            <div className="studio-text">
                                <h3 className="d-flex">Studio Talk {/*<i className="fas fa-angle-double-right fa-2x" style="color: #f232d1; padding-left: 10px;"></i>*/}</h3>
                                <p className="lead">We invited Ben from Body Control Records to sit down and interview ACEAN recently.about music style, gear and studio perferences.   Etctetcttcct</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <section id="radio">
            <div className="section-content fadeInView">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="radio-text">
                                <h3 className="d-flex">Music player</h3>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


        </div>
    );
  }
}

export default HomePage;
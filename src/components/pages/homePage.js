import React, { Component } from 'react';

import CardLarge from "../homePageComponents/cardLarge";
import CardSmall from "../homePageComponents/cardSmall";

class HomePage extends Component {
  render() {
    return (
        <div>

        <section id="shout-out">
             <div className="section-content">
                 <div className="container">

                     <div className="row">


                        <div className="col-md-6">
                            <CardLarge img="SOL018.jpg" title="Rusuden • Volume 3" />
                        </div>

                        <div className="col-md-6">
                            <CardLarge img="SOL017.jpg" title="ACEAN • Manhattan" />
                        </div>

                        <div className="col-lg-4">
                            <CardSmall img="home-news_Seal-Beach.jpg" title='Seal Beach 12"' text="This amazing record has been sold out for quite some time. Should we repress?" btn="Let us know (email/modal)" />
                        </div>

                        <div className="col-lg-4">
                            <CardSmall img="home-news_FeIXX171A.jpg" title="Rusuden • Fe IX/X 171 A" text='Backstock found of this amazing 12" on blue wax. Do not sleep on this one.' btn="Learn More" />
                        </div>

                        <div className="col-lg-4">
                            <CardSmall img="home-news_AB-cassette.jpg" title="Rusuden • A/B (Cassette)" text="From our friends at Body Control Records, cassette AB is out now." btn="Buy Now" />
                        </div>


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


        <section id="radio">
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
        </section>


        </div>
    );
  }
}

export default HomePage;
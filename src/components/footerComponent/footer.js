import React, { Component } from 'react';

import Modal from 'react-responsive-modal';

class Footer extends Component {

    state = {
        open: false
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

      <footer id="footer-main">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <p><a href="#" onClick={this.onOpenModal} >Privacy Policy</a></p>
                      <p>&copy; 2019 Soho Six Records</p>
                  </div>
                  <div className="col-6 social-icons">
                      <ul>
                          <li><a href="http://sohosix.bandcamp.com/" target="_blank" rel="noopener noreferrer"><img className="icon" src={ '/img/icons/bandcamp.svg' } alt="bandcamp" /></a></li>
                          <li><a href="https://twitter.com/Rusuden" target="_blank" rel="noopener noreferrer"><img className="icon" src={ '/img/icons/twitter.svg' } alt="twitter" /></a></li>
                          <li><a href="mailto:hellohuman@sohosix.com"><img className="icon" src={ '/img/icons/email.svg' } alt="email" /></a></li>
                      </ul>
                  </div>

                    <Modal open={open} onClose={this.onCloseModal} center>
                        <div className="policyModal">
                            <h4>Privacy Policy</h4>
                            <div className="row">
                                <div className="col-12">

                                    <p>
                                        This privacy notice discloses the privacy practices for <span>Soho Six Records (www.sohosix.com)</span>. 
                                        This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                                        <ol type="1">
                                            <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                                            <li>What choices are available to you regarding the use of your data.</li>
                                            <li>The security procedures in place to protect the misuse of your information.</li>
                                            <li>How you can correct any inaccuracies in the information.</li>
                                        </ol>
                                    <p>
                                        <strong>Information Collection, Use, and Sharing</strong> 
                                        <br />
                                        We are the sole owners of the information collected 
                                        on this site. We only have access to/collect information that you voluntarily give us via email or other direct 
                                        contact from you. We will not sell or rent this information to anyone.</p>
                                    <p>
                                        We will use your information to respond to you, regarding the reason you contacted us. We will not share your 
                                        information with any third party outside of our organization, other than as necessary to fulfill your request, 
                                        e.g. to ship an order.</p>
                                    <p>
                                        Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products 
                                        or services, or changes to this privacy policy.</p>
                                    <p>
                                        <strong>Your Access to and Control Over Information</strong>
                                        <br />
                                        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting 
                                        us via the email address given on our website:</p>
                                        <ul>
                                            <li>See what data we have about you, if any.</li>
                                            <li>Change/correct any data we have about you.</li>
                                            <li>Have us delete any data we have about you.</li>
                                            <li>Express any concern you have about our use of your data.</li>
                                        </ul>
                                    <p>
                                        <strong>Security</strong>
                                        <br />
                                        We take precautions to protect your information. When you submit sensitive information 
                                        via the website, your information is protected both online and offline.</p>
                                    <p>
                                        <strong>Links</strong>
                                        <br />
                                        This website contains links to other sites. Please be aware that we are not responsible for the content or 
                                        privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read 
                                        the privacy statements of any other site that collects personally identifiable information.</p>
                                    <p>
                                        <strong>If you feel that we are not abiding by this privacy policy, you should contact us immediately via  
                                        <a href="mailto:hellohuman@sohosix.com"> email</a>.</strong></p>

                                </div>
                            </div>
                        </div>
                    </Modal>

              </div>
          </div>
      </footer>

    );
  }
}

export default Footer;
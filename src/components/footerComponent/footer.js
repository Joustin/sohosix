import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer id="footer-main">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <p><a href="">Privacy Policy</a></p>
                      <p>&copy; 2018 Soho Six Records</p>
                  </div>
                  <div className="col-6 social-icons">
                      <ul>
                          <li><a href="http://sohosix.bandcamp.com/" target="_blank"><img className="icon" src={ '/img/icons/bandcamp.svg' } alt="bandcamp" /></a></li>
                          <li><a href="https://twitter.com/Rusuden" target="_blank"><img className="icon" src={ '/img/icons/twitter.svg' } alt="twitter" /></a></li>
                          <li><a href="mailto:hellohuman@sohosix.com" target="_blank"><img className="icon" src={ '/img/icons/email.svg' } alt="email" /></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>

    );
  }
}

export default Footer;
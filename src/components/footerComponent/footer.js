import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer id="footer-main">
          <div className="container">
              <div className="row">
                  <div className="col-sm-3">
                      <p>uncopyright 2018... balalalal</p>
                      <p>bunk</p>
                  </div>
                  <div className="col-sm-3">
                      <ul className="list-unstyled">
                          <li><a href="">home</a></li>
                          <li><a href="">what we do</a></li>
                          <li><a href="">about</a></li>
                          <li><a href="">latest</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-3">
                      <ul className="list-unstyled">
                          <li><a href="">facebook</a></li>
                          <li><a href="">twitter</a></li>
                          <li><a href="">youtube</a></li>
                          <li><a href="">linkedin</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-3">
                      <h6>small title</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita fugit saepe, eum ad, quam! Eum magnam suscipit nulla ullam aliquam consectetur provident, nihil consequuntur porro labore asperiores corrupti esse?</p>
                  </div>
              </div>
          </div>
      </footer>

    );
  }
}

export default Footer;
import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';


class Header extends Component {


  constructor(props) {
    super(props);
    this.state = {
        // navCollapsed: true
    };

  }

  // _onToggleNav = () => {
  //   this.setState({ navCollapsed: !this.state.navCollapsed });
  // }



  render() {

    // const { navCollapsed } = this.state;

    return (

        <header>


          {/* <nav className="navbar navbar-expand-md fixed-top navbar-dark justify-content-between align-items-stretch">

            <a className="navbar-brand order-sm-0 align-self-center mx-2" href="/">
              <img className="logo-main animated fadeIn" src={ '/img/logo_main.svg' } alt="sohosix.logo" />
            </a>

            <button className="navbar-toggler order-sm-2" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarCollapse" 
                    aria-controls="navbarCollapse" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={this._onToggleNav}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse align-items-stretch'} id="navbarCollapse">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <NavLink exact to='/' className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Artists' className="nav-link">Artists</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Releases' className="nav-link">Releases</NavLink>
                </li>

              </ul>
            </div>


          </nav> */}


          <div className="nav-box d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                
                <a className="mr-md-auto" href="/">
                  <img className="logo-main animated fadeIn" src={ '/img/logo_main.svg' } alt="sohosix.logo" />
                </a>
                
                <nav className="my-1 my-md-2">
                  <NavLink exact to='/' className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                  <NavLink to='/Artists' className="nav-link">Artists</NavLink>
                  <NavLink to='/Releases' className="nav-link">Releases</NavLink>
                </nav>

          </div>


        </header>

    );
  }
}

export default Header;

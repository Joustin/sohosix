import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';

import './App.css';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import ArtistsMain from './components/pages/artistsMain';
import ArtistsFocus from './components/pages/artistsFocus';
import ReleasesMain from './components/pages/releasesMain';
import ReleasesFocus from './components/pages/releasesFocus';

// includes

class App extends Component {
  render() {
    return (

      <Router>

        <div className="App">

          <Header />

          <main className="" id="content" role="main">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Artists' component={ArtistsMain} />
              <Route path='/Artists/:id' component={ArtistsFocus} />
              <Route exact path='/Releases' component={ReleasesMain} />
              <Route exact path='/Releases/:id' component={ReleasesFocus} />
            </Switch>
          </main>

          <Footer />

        </div>

      </Router>
    );
  }
}

export default App;

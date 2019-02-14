import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="nav-wrapper transparent">
          <div class="container">
                  <a href="#" class="brand-logo indigo-text text-darken-4">
                    <i class="logo material-icons">cloud</i>
                    MoviesSearcher
                  </a>
                  <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                      <i class="material-icons">menu</i>
                  </a>
                  <ul class="right hide-on-med-and-down">
                      <li><a href="#photos">Photo's</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Instagram">
                          <i class="fab fa-instagram"></i>
                      </a></li>
                      <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Facebook">
                          <i class="fab fa-facebook"></i>
                      </a></li>
                      <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Tiwtter">
                          <i class="fab fa-twitter"></i>
                      </a></li>
                  </ul>
                  <ul class="sidenav gray lighten-2" id="mobile-menu">
                      <li><a href="#">Photo's</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </div>
        </nav>
        
      </div>
    );
  }
}

export default App;

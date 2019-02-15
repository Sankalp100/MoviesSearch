import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Header from './Header';

class App extends Component {
    render(){
        return(
            <div>
                <Navigation/>
                <Header/>
            </div>
        );  
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

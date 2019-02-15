import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';

class App extends Component {
    render(){
        return(
            <div>
                <Navigation/>
            </div>
        );  
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component{
    render(){
        return(
            
                <nav class="nav-wrapper blue">
                    <div className="container">
                    <a href="#" class="brand-logo indigo-text text-darken-4">
                        <i class="logo material-icons">cloud</i>
                        MoviesSearcher
                    </a>
                    </div>
                </nav>
            
        );
    }
} 

export default Navigation;
import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <div>
                <nav class="nav-wrapper">
                    <div className="container">
                    <a href="#" class="brand-logo indigo-text text-darken-4">
                        <i class="logo material-icons">cloud</i>
                        MoviesSearcher
                    </a>
                    </div>
                </nav>
            </div>
        );
    }
} 

export default Navigation;
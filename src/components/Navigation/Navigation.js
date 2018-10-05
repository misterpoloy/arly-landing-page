import React from 'react';

// images
import logo from '../../assets/img/arly_logo_white.png';

const navigation = () => {
    return (
        <header>
            <nav className="navbar header-nav fixed-top navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="120" title="Arly Logo White" alt="Arly Logo White" />
                        <span className="theme-bg"></span>
                    </a>
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
            
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <ul className="navbar-nav">
                            <li><a className="nav-link" href="#homea">What is Arly?</a></li>
                            <li><a className="nav-link" href="#features">Features</a></li>
                            <li><a className="nav-link" href="#howto">How to start?</a></li>
                            <li><a className="nav-link" href="#price">Prices</a></li>
                            <li><a className="nav-link" href="/faq.html">FAQ</a></li>
                        </ul>
                    </div>
            
                </div>
            </nav>
        </header>
    );
}

export default navigation;
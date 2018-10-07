import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// images
import logo from '../../assets/img/logos/arly_logo_white.png';

const navigation = () => {
    return (
        <header>
            <nav className="navbar header-nav fixed-top navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="120" title="Arly Logo White" alt="Arly Logo White" />
                        <span className="theme-bg"></span>
                    </Link>
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
            
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <ul className="navbar-nav">
                            <li><HashLink className="nav-link" to="/#homea">What is Arly?</HashLink></li>
                            <li><HashLink className="nav-link" to="/#features">Features</HashLink></li>
                            <li><HashLink className="nav-link" to="/#howto">How to start?</HashLink></li>
                            <li><HashLink className="nav-link" to="/#price">Prices</HashLink></li>
                            <li><Link className="nav-link" to="/faq">Faq</Link></li>
                        </ul>
                    </div>
            
                </div>
            </nav>
        </header>
    );
}

export default navigation;
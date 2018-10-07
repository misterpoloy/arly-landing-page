import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import { Scroll, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// images
import logo from '../../assets/img/logos/arly_logo_white.png';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            isTop: true,
            navbarOpen: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;

            if (isTop !== this.state.isTop) {
                this.setState({
                    isTop: isTop
                })
            }
        });
    }

    toggleNavbar = () => {
        const prevState = {...this.state};
        this.setState({
            navbarOpen: !prevState.navbarOpen
        })
    }

    render() {
        let navClass = "navbar header-nav fixed-top navbar-expand-lg"
        let navbarClass = "collapse navbar-collapse justify-content-end"

        if (!this.state.isTop) {
            navClass += " fixed-header"
        }

        if (this.state.navbarOpen === true) {
            navbarClass += " show";
            navClass += " fixed-header";
        }

        return (
            <header>
                <nav className={navClass}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="120" title="Arly Logo White" alt="Arly Logo White" />
                            <span className="theme-bg"></span>
                        </Link>
                
                        <button onClick={this.toggleNavbar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                
                        <div ref={this.navbar} className={navbarClass} id="navbar">
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
}

export default Navigation;
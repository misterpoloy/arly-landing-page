import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

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

    scrollingBehavior = (el) => {
        el.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
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
                                <li><NavLink className="nav-link" activeClassName="active" scroll={this.scrollingBehavior} to="/#homea">What is Arly?</NavLink></li>
                                <li><NavLink className="nav-link" activeClassName="active" scroll={this.scrollingBehavior} to="/#features">Features</NavLink></li>
                                <li><NavLink className="nav-link" activeClassName="active" scroll={this.scrollingBehavior} to="/#howto">How to start?</NavLink></li>
                                <li><NavLink className="nav-link" activeClassName="active" scroll={this.scrollingBehavior} to="/#price">Prices</NavLink></li>
                                <li><NavLink className="nav-link" to="/faq">Faq</NavLink></li>
                            </ul>
                        </div>
                
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;
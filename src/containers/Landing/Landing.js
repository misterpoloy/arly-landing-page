import React, { Component } from 'react';

import { Route } from 'react-router';

// global components imports
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Main from '../../hoc/Main/Main';
import Footer from '../../components/Footer/Footer';

// pages imports
import Home from './Home/Home';
import Faqs from './Faqs/Faqs';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerInfo: {
                title: "Artificial intelligence as a community manager",
                description: "Whether you want to start your business, scale or reduce your operating costs, Arly's platform helps you in the process.Imagine the concept of renting a place for your business, in Arly you can rent the online store, the staff and the distribution logistics.",
                background: 'backgrounds/bg-effect-1.svg',
                banner: "banners/banner1.png",
                buttonLink: '#price',
                buttonText: 'Limited Availability'
            },
            faqPageHeader: {
                title: "FAQ's",
                background: 'backgrounds/faqs-background.jpg',
                banner: ""
            }
        }
    }

    render() {
        return (
            <div className="Landing">
                <Navigation />
                <Main>
                    <Route 
                        path="/" 
                        exact
                        render={() => 
                            <div>
                                <Header isHome={true} headerInfo={this.state.headerInfo} />
                                <Home />
                            </div>
                        }   
                    />
                    <Route 
                        path="/faq" 
                        exact 
                        render={() => 
                            <div>
                                <Header isHome={false} headerInfo={this.state.faqPageHeader} />
                                <Faqs />
                            </div>
                        } 
                    />
                </Main>
                <Footer />
            </div>
        )
    }
}

export default Landing;
import React, { Component } from 'react';

// components
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

class App extends Component {
    state = {
        loading: true,
        headerInfo: {
            title: "Artificial intelligence as a community manager",
            description: "Whether you want to start your business, scale or reduce your operating costs, Arly's platform helps you in the process.Imagine the concept of renting a place for your business, in Arly you can rent the online store, the staff and the distribution logistics.",
            background: 'backgrounds/bg-effect-1.svg',
            banner: "banners/banner1.png",
            buttonLink: '#price',
            buttonText: 'Limited Availability'
        }
    };
    
    componentDidMount() {
        setTimeout( () => this.setState( { loading: false } ), 1);
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="loading">
                    <div className="load-circle"><span className="one"></span></div>
                </div>
            );
        }

        return (
            <div className="App">
                <Navigation />
                <Main>
                    <Header isHome={true} headerInfo={this.state.headerInfo}/>
                </Main>
            </div>
        );
    }
}
    
export default App;
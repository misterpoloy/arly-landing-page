import React, { Component } from 'react';

// components
import Navigation from '../components/Header/Header';
import Main from '../components/Main/Main';

class App extends Component {
    state = {
        loading: true
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
                <Main />
            </div>
        );
    }
}
    
export default App;
    
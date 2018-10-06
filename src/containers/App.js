import React, { Component } from 'react';

import Landing from './Landing/Landing';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

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
                <Landing />
            </div>
        );
    }
}
    
export default App;
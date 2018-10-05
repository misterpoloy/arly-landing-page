import React, { Component } from 'react';

class App extends Component {
    state = {
        loading: true
    };
    
    componentDidMount() {
        setTimeout( () => this.setState( { loading: false } ), 1500);
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
                Arly Stores Page with React
            </div>
        );
    }
}
    
export default App;
    
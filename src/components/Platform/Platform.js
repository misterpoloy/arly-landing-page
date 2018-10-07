import React, { Component } from 'react';

class Platform extends Component {
    render() {
        if (this.props.platformInfo.available) {
            return (
                <li>
                    <i className="ti-control-forward"></i> {this.props.platformInfo.platformName}
                </li>
            );
        } else if ( this.props.platformInfo.willBe ) {
            return (
                <li>
                    <i className="ti-control-forward"></i> {this.props.platformInfo.platformName} (Comming soon)
                </li>
            );
        }
        return null;
    }
}

export default Platform;
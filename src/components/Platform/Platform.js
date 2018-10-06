import React, { Component } from 'react';

class Platform extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.platformInfo.available) {
            return (
                <li>
                    <i class="ti-control-forward"></i> {this.props.platformInfo.platformName}
                </li>
            );
        } else if ( this.props.platformInfo.willBe ) {
            return (
                <li>
                    <i class="ti-control-forward"></i> {this.props.platformInfo.platformName} (Comming soon)
                </li>
            );
        }
        return null;
    }
}

export default Platform;
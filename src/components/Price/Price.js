import React, { Component } from 'react';

class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plan: '',
            price: '',
            currency: '',
            subscription: '',
            spacesNumber: '',
            spacesDescription: '',
            chanelsNumber: '',
            featuresNumber: '',
            dailyInteractions: '',
            buttonLink: '',
            buttonText: '',
            offerAmmount: '',
            offerDetails: ''
        }
    }

    render() {
        return (
            <div className="col-md-4 sm-m-30px-b">
                <div className="price-table">
                    <div className="pt-head theme-g-bg">
                        <label className="label">{this.props.plan}</label>
                        <p>{this.props.currency} {this.props.price}</p>
                        <label>{this.props.subscription}</label><br />
                        <p>{this.props.spacesNumber}</p>
                        <label>{this.props.spacesDescription}</label>
                    </div>
                    <div className="pt-body">
                        <ul>
                        <li>{this.props.chanelsNumber} Chanels (Skype, Messenger, SMS etc.)</li>
                        <li>{this.props.featuresNumber} Features (Described <a href="#features">above</a>)</li>
                        <li>{this.props.dailyInteractions} daily interactions (<a href="/faq.html">more info</a>)</li>
                        </ul>
                    </div>
                    <div className="pt-footer">
                        <a href={this.props.buttonLink} className="m-btn-theme m-btn">{this.props.buttonText}</a><br />
                        <label className="discount">{this.props.offerAmmount} {this.props.offerDetails}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Price;
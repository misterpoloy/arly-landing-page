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
            <div class="col-md-4 sm-m-30px-b">
                <div class="price-table">
                    <div class="pt-head theme-g-bg">
                        <label class="label">{this.props.plan}</label>
                        <p>{this.props.currency} {this.props.price}</p>
                        <label>{this.props.subscription}</label><br />
                        <p>{this.props.spacesNumber}</p>
                        <label>{this.props.spacesDescription}</label>
                    </div>
                    <div class="pt-body">
                        <ul>
                        <li>{this.props.chanelsNumber} Chanels (Skype, Messenger, SMS etc.)</li>
                        <li>{this.props.featuresNumber} Features (Described <a href="#features">above</a>)</li>
                        <li>{this.props.dailyInteractions} daily interactions (<a href="/faq.html">more info</a>)</li>
                        </ul>
                    </div>
                    <div class="pt-footer">
                        <a href={this.props.buttonLink} class="m-btn-theme m-btn">{this.props.buttonText}</a><br />
                        <label class="discount">{this.props.offerAmmount} {this.props.offerDetails}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Price;
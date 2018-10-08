import React, { Component } from 'react';

import ModalVideo from 'react-modal-video';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Who We are?',
            pageContent: '<p>We are young entrepreneurs who started an idea by joining our commercial strengths with our technical skills to create Arly. We have extensive knowledge in the creation of startups and we are currently students of YC shool 2018.</p><p>We have extensive knowledge in the creation of Bots and the integration of artificial intelligence, from the creation of a virtual assistant for people with blindness to the creation of Arly, the future of trade-client interaction. In addition to technical skills we have extensive experience in the area of customer service and this knowledge was the motivation to create a more effective alternative to serve our multiple users who every day expect a quick but efficient response at the same time.</p>',
            pageMedia: 'zQrzV6GNLAE',
            mediaPortrait: 'banners/banner1.png',
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }

    render() {
        const mediaPortrait = require('../../../assets/img/' + this.state.mediaPortrait);
        return (
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="feature-box-03 md-m-30px-b">
                                <h4 className="font-alt">{this.state.pageTitle}</h4>
                                <div dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box">
                                <a className="popup-video" onClick={this.openModal} href="#about">
                                    <img src={mediaPortrait} title="" alt="" />
                                    <i className="icon ti-control-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.pageMedia} onClose={() => this.setState({isOpen: false})} />
            </section>
        )
    }
}

export default About;
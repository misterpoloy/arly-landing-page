import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Who We are?',
            pageContent: '<p>We are young entrepreneurs who started an idea by joining our commercial strengths with our technical skills to create Arly. We have extensive knowledge in the creation of startups and we are currently students of YC shool 2018.</p><p>We have extensive knowledge in the creation of Bots and the integration of artificial intelligence, from the creation of a virtual assistant for people with blindness to the creation of Arly, the future of trade-client interaction. In addition to technical skills we have extensive experience in the area of customer service and this knowledge was the motivation to create a more effective alternative to serve our multiple users who every day expect a quick but efficient response at the same time.</p>',
            pageMedia: 'https://www.youtube.com/watch?v=zQrzV6GNLAE',
            mediaPortrait: 'banners/banner1.png'
        }
    }

    render() {
        const mediaPortrait = require('../../../assets/img/' + this.state.mediaPortrait);
        return (
            <section class="section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="feature-box-03 md-m-30px-b">
                                <h4 class="font-alt">{this.state.pageTitle}</h4>
                                <div dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-box">
                                <a class="popup-video" href="https://www.youtube.com/watch?v=zQrzV6GNLAE">
                                    <img src={mediaPortrait} title="" alt="" />
                                    <i class="icon ti-control-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
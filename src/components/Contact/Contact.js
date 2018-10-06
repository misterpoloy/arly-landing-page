import React, { Component } from 'react';

import SocialNetworks from '../../containers/SocialNetworks/SocialNetworks';

import startupSchoolLogo from '../../assets/img/startupschool.png';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'hello@arlystores.com',
            address: 'Guatemala City, Zone 10.'
        }
    }

    render() {
        return (
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="contact-info theme-g-bg">
                        <div class="ci-row">
                            <label>For General Enquiries</label>
                            <span>{this.state.email}</span>
                        </div>
                        <div class="ci-row">
                            <label>Address</label>
                            <span>{this.state.address}</span>
                        </div>
                        <SocialNetworks />
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="contact-form">
                        <h2>Get in touch</h2>
                        <form class="contactform" method="post" action="static/php/process-form.php">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input id="name" name="name" type="text" placeholder="Name" class="validate form-control" required />
                                        <span class="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input id="email" type="email" placeholder="Email" name="email" class="validate form-control" required />
                                        <span class="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea id="message" placeholder="Your Comment" name="message" class="form-control" required></textarea>
                                        <span class="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="send">
                                        <button class="m-btn m-btn-theme" type="submit" name="send"> Send</button>
                                    </div>
                                    <span class="output_message"></span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br /><img src={startupSchoolLogo} width="150" title="Startup School" alt="Startup School" />
                    <br /><label>2018 Alumni</label>
                </div>
            </div>
        )
    }
}

export default Contact;
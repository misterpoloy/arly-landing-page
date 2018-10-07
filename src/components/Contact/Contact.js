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
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="contact-info theme-g-bg">
                        <div className="ci-row">
                            <label>For General Enquiries</label>
                            <span>{this.state.email}</span>
                        </div>
                        <div className="ci-row">
                            <label>Address</label>
                            <span>{this.state.address}</span>
                        </div>
                        <SocialNetworks />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="contact-form">
                        <h2>Get in touch</h2>
                        <form className="contactform" method="post" action="static/php/process-form.php">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input id="name" name="name" type="text" placeholder="Name" className="validate form-control" required />
                                        <span className="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input id="email" type="email" placeholder="Email" name="email" className="validate form-control" required />
                                        <span className="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea id="message" placeholder="Your Comment" name="message" className="form-control" required></textarea>
                                        <span className="input-focus-effect"></span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="send">
                                        <button className="m-btn m-btn-theme" type="submit" name="send"> Send</button>
                                    </div>
                                    <span className="output_message"></span>
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
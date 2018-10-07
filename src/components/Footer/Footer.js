import React, { Component } from 'react';

import SocialNetworks from '../../containers/SocialNetworks/SocialNetworks';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logo: 'arly_logo_white_simple.png',
            addres: 'Guatemala, Guatemala City Z.10',
            email: 'hello@arlystores.com',
            columns: [
                {
                    columnTitle: 'Product',
                    linksColumn: true,
                    links: [
                        {
                            text: 'What is Arly?',
                            link: '/'
                        },
                        {
                            text: 'Price',
                            link: '/#price'
                        },
                        {
                            text: 'F.A.Q.',
                            link: '/faq'
                        },
                    ]
                },
                {
                    columnTitle: 'Company',
                    linksColumn: true,
                    links: [
                        {
                            text: 'About',
                            link: '/about'
                        },
                        {
                            text: 'Blog',
                            link: 'https://medium.com/arly-stores'
                        },
                        {
                            text: 'Press',
                            link: '#'
                        },
                        {
                            text: 'Policy',
                            link: '/privacy-policy'
                        },
                    ]
                }
            ]
        }
    }

    render() {
        const year = new Date().getFullYear();
        const logo = require('../../assets/img/logos/' + this.state.logo);

        const footerColumns = this.state.columns.map((column, columIndex) => {
            return (
                <div key={columIndex} className="col-6 col-md-3 col-lg-2 sm-m-15px-tb">
                    <h4 className="font-alt">{column.columnTitle}</h4>
                    
                    <ul className="fot-link">
                        {column.links.map((link, linkIndex) => {
                            return (
                                <li key={linkIndex}><a href={link.link}>{link.text}</a></li>        
                            )
                        })}
                    </ul>
                </div>
            )
        })

        return (
            <footer className="footer theme-bg">
                <section className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-5 sm-m-15px-tb">
                                <img src={logo} width="150" title="Arly Stores" alt="Arly Stores" />
                                <br /><br />
                            </div>
                
                            {footerColumns}
                
                            <div className="col-md-3 col-lg-3 sm-m-15px-tb">
                                <h4 className="font-alt">Get in touch</h4>
                                <p>{this.state.addres}</p>
                                <p><span>E-Mail:</span> {this.state.email} </p>
                                <SocialNetworks />
                            </div>
                
                        </div>
                        
                        <div className="footer-copy">
                            <div className="row">
                                <div className="col-12">
                                    <p>© {year} Arly Stores. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;
import React, { Component } from 'react';

import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';

class SocialNetworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            networks: [
                {
                    name: 'Facebook',
                    link: '#',
                    icon: 'fab fa-facebook-f'
                },
                {
                    name: 'Twitter',
                    link: '#',
                    icon: 'fab fa-twitter'
                },
                {
                    name: 'Instagram',
                    link: '#',
                    icon: 'fab fa-instagram'
                },
            ]
        }
    }

    render() {
        const networks =  this.state.networks.map((network, index) => {
            return <SocialNetwork 
                        key={index}
                        name={network.name}
                        link={network.link}
                        icon={network.icon}
                    />
        })

        return (
            <ul className="social-icons">
                {networks}
            </ul>
        )
    }
}

export default SocialNetworks;
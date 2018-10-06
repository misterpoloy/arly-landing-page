import React, { Component } from 'react';

import Platform from '../../components/Platform/Platform';

class Platforms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platforms: [
                {
                    platformName: 'Kik',
                    available: true
                },
                {
                    platformName: 'Skype',
                    available: true
                },
                {
                    platformName: 'SMS',
                    available: true
                },
                {
                    platformName: 'Telegram',
                    available: true
                },
                {
                    platformName: 'MS Teams',
                    available: true
                },
                {
                    platformName: 'Email',
                    available: true
                },
                {
                    platformName: 'Intercom',
                    available: true
                },
                {
                    platformName: 'Facebook Messenger',
                    available: true
                },
                {
                    platformName: 'Whatsapp',
                    available: false,
                    willBe: true
                },
            ]
        }
    }

    render() {
        return this.state.platforms.map((platform, index) => {
            return <Platform key={index} platformInfo={platform} />
        })
    }
}

export default Platforms;
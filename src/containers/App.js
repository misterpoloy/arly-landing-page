import React, { Component } from 'react';

// components
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Main from '../hoc/Main/Main';
import SectionWrapper from '../hoc/SectionWrapper/SectionWrapper';
import Feature from '../components/Feature/Feature';

class App extends Component {
    state = {
        loading: true,
        headerInfo: {
            title: "Artificial intelligence as a community manager",
            description: "Whether you want to start your business, scale or reduce your operating costs, Arly's platform helps you in the process.Imagine the concept of renting a place for your business, in Arly you can rent the online store, the staff and the distribution logistics.",
            background: 'backgrounds/bg-effect-1.svg',
            banner: "banners/banner1.png",
            buttonLink: '#price',
            buttonText: 'Limited Availability'
        },
        chatbotSection: {
            title: "What is a Chatbot?",
            description: "Imagine sending a text message to a number to order a piizza and have it delivered to you without even having to speak to a human; That’s what bots do. Specifically, a bot is an application that performs an automated task, such as activating an alarm, giving you the weather, or doing an online search. Siri and Cortana are bots, just as Microsoft Clippy was, remember?",
            descriptionHighlighted: "So, in summary, what is a bot? It is nothing more than a computer program with the ability to emulate a human conversation to achieve a concrete action.",
            media: "banners/banner2.svg",
            mediaTitle: "What is a Chatbot?",
            mediaSmall: false,
            bgColor: "gray-bg",
            orientation: "left",
            centerElements: true
        },
        featuresSection: {
            title: "What Can Arly Do?",
            description: "",
            descriptionHighlighted: "",
            media: "Chat_Bot_Gift.gif",
            mediaTitle: "ChatBot Example",
            mediaSmall: true,
            bgColor: "gray-bg",
            orientation: "right",
            centerElements: false
        },
        features: [
            {
                featureName: '1. Answer questions',
                featureDescripcion: 'Answer the doubts of your customers 24 hours 365 days a year, 7 days a week.',
                featureIcon: 'ti-comment',
                featureExample: 'What is your phone number?'
            },
            {
                featureName: '2. Handle complaints and claims',
                featureDescripcion: 'Empathize with your customers in a fast way and provide help instantly ',
                featureIcon: 'ti-comments-smiley',
                featureExample: 'What is the status of my issue?'
            },
            {
                featureName: '3. Manage purchases and orders',
                featureDescripcion: 'Implement an agile methodology so that your customers can buy your products and track orders.',
                featureIcon: 'ti-bag',
                featureExample: 'Where is my order #123 now?'
            },
            {
                featureName: '4. Event scheduling',
                featureDescripcion: 'Deliver the information of your events in an efficient and orderly manner.',
                featureIcon: 'ti-calendar',
                featureExample: 'When the inscriptions begin?'
            },
            {
                featureName: '5. Explanation of processes',
                featureDescripcion: 'Have specific process? information that your users ask can easly be managed. ',
                featureIcon: 'ti-panel',
                featureExample: 'How do I send transfers?'
            },
            {
                featureName: '6. Inventory management',
                featureDescripcion: 'Help optimize your stock so you do not lose the opportunity to sell your product.',
                featureIcon: 'ti-write',
                featureExample: 'Do you have the red iphone X?'
            },
        ]
    };
    
    componentDidMount() {
        setTimeout( () => this.setState( { loading: false } ), 1);
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="loading">
                    <div className="load-circle"><span className="one"></span></div>
                </div>
            );
        }

        const features = this.state.features.map((feature, index) => {
            return <Feature key={index} featureInfo={feature}/>
        })

        return (
            <div className="App">
                <Navigation />
                <Main>
                    <Header isHome={true} headerInfo={this.state.headerInfo}/>
                    <SectionWrapper id="chatbot" sectionInfo={this.state.chatbotSection}/>
                    <SectionWrapper 
                        id="features" 
                        sectionInfo={this.state.featuresSection}>
                        {features}
                    </SectionWrapper>
                </Main>
            </div>
        );
    }
}
    
export default App;
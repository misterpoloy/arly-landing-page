import React, { Component } from 'react';

// components
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Main from '../hoc/Main/Main';
import SectionWrapper from '../hoc/SectionWrapper/SectionWrapper';
import SingleSectionWrapper from '../hoc/SingleSectionWrapper/SingleSectionWrapper';
import Feature from '../components/Feature/Feature';
import Advantage from '../components/Advantage/Advantage';
import Platforms from '../containers/Platforms/Platforms';
import Price from '../components/Price/Price';

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
            mainTitle: "",
            title: "What is a Chatbot?",
            description: "Imagine sending a text message to a number to order a piizza and have it delivered to you without even having to speak to a human; That’s what bots do. Specifically, a bot is an application that performs an automated task, such as activating an alarm, giving you the weather, or doing an online search. Siri and Cortana are bots, just as Microsoft Clippy was, remember?",
            descriptionHighlighted: "So, in summary, what is a bot? It is nothing more than a computer program with the ability to emulate a human conversation to achieve a concrete action.",
            media: "banners/banner2.svg",
            mediaTitle: "What is a Chatbot?",
            mediaSmall: false,
            bgColor: "gray-bg",
            orientation: "left",
            centerElements: true,
            sectionIcon: "",
            singleTextIcon: "",
            featureBox: "feature-box-03",
            sectionFooter: ""
        },
        featuresSection: {
            mainTitle: "",
            title: "What Can Arly Do?",
            description: "",
            descriptionHighlighted: "",
            media: "Chat_Bot_Gift.gif",
            mediaTitle: "ChatBot Example",
            mediaSmall: true,
            bgColor: "gray-bg",
            orientation: "right",
            centerElements: false,
            sectionIcon: "",
            singleTextIcon: "",
            featureBox: "feature-box-03",
            sectionFooter: ""
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
        ],
        advantagesSection: {
            mainTitle: "",
            title: "Why is Arly better?",
            description: "",
            descriptionHighlighted: "",
            media: "banners/banner2.png",
            mediaTitle: "",
            mediaSmall: false,
            bgColor: "",
            orientation: "right",
            centerElements: true,
            sectionIcon: 'fa-trophy',
            singleTextIcon: "",
            featureBox: "feature-box-04",
            sectionFooter: "And yet this is only phase 1 of 3..."
        },
        advantages: [
            {
                title: "Natural language processing",
                description: "Arly is not only a form with chat interface, we know that human language is very complex and there are different ways of transmitting an intension. Arly is able to handle a fluent conversation.",
                image: ""
            },
            {
                title: "Personality and unique branding",
                description: "Arly can adapt to your branding, unique and personalized phrases to transmit a character and generate empathy can be done from the control area so that each user has a unique experience.",
                image: ""
            },
            {
                title: "Speed in implementation",
                description: "A bot can take months of development, in Arly you have it in less than 1 hour. For real.",
                image: ""
            },
            {
                title: "Security and robust infrastructure",
                description: "Are you worried about safety? Arly uses Microsoft's data centers and security services with 99.99% dedicated servers, security and point technology on multiple continents.",
                image: "PoweredByAzure.png"
            },
        ],
        stepsSections: [
            {
                mainTitle: "How Do I Start? 3 Steps",
                title: "1. Give it a personality, provide questions/answers",
                description: "Customize your bot from a greeting to the way it serves your customers, make your best customer service representative without training and in just a few minutes.",
                descriptionHighlighted: "",
                media: "banners/banner4.svg",
                mediaTitle: "",
                mediaSmall: false,
                bgColor: "gray-bg",
                orientation: "left",
                centerElements: true,
                sectionIcon: true,
                singleTextIcon: "1",
                featureBox: "feature-box-04",
                sectionFooter: ""
            },
            {
                mainTitle: "",
                title: "2. Select the platforms where you want your bot (channels)",
                description: "You can choose which of the channels are more efficient for your company and integrate Arly so that none of your customers is left without the right help.",
                descriptionHighlighted: "",
                media: "channels.png",
                mediaTitle: "",
                mediaSmall: false,
                bgColor: "gray-bg",
                orientation: "right",
                centerElements: true,
                sectionIcon: true,
                singleTextIcon: "2",
                featureBox: "feature-box-04",
                sectionFooter: ""
            },
            {
                mainTitle: "",
                title: "3. Continuous improvement with Insights",
                description: "Through a control panel you will have insights about the feelings of your clients. You can control the feedbacks and important points to have a continuous improvement in your customer service.",
                descriptionHighlighted: "",
                media: "banners/banner5.png",
                mediaTitle: "",
                mediaSmall: false,
                bgColor: "gray-bg",
                orientation: "left",
                centerElements: true,
                sectionIcon: true,
                singleTextIcon: "3",
                featureBox: "feature-box-04",
                sectionFooter: ""
            },
        ],
        pricingSection: {
            title: "Limited Availability",
            description: "",
            bgColor: "",
            centerElements: true,
            border: true,
            sectionFooter: ""
        },
        pricing: [
            {
                plan: 'PERSONAL',
                price: '50.00',
                currency: '$',
                subscription: 'Per Month',
                spacesNumber: '38',
                spacesDescription: 'Spaces available',
                chanelsNumber: '1',
                featuresNumber: '2',
                dailyInteractions: '200',
                buttonLink: '#',
                buttonText: 'START NOW',
                offerAmmount: '10%',
                offerDetails: 'off on anual payment'
            },
            {
                plan: 'BUSINESS',
                price: '150.00',
                currency: '$',
                subscription: 'Per Month',
                spacesNumber: '38',
                spacesDescription: 'Spaces available',
                chanelsNumber: '2',
                featuresNumber: '3',
                dailyInteractions: '500',
                buttonLink: '#',
                buttonText: 'START NOW',
                offerAmmount: '15%',
                offerDetails: 'off on anual payment'
            },
            {
                plan: 'ENTERPRISE',
                price: '200.00',
                currency: '$',
                subscription: 'Per Month',
                spacesNumber: '38',
                spacesDescription: 'Spaces available',
                chanelsNumber: '5',
                featuresNumber: 'All the ',
                dailyInteractions: '1000',
                buttonLink: '#',
                buttonText: 'START NOW',
                offerAmmount: '25%',
                offerDetails: 'off on anual payment'
            },
        ],
        contactSection: {
            title: "Contact",
            description: "",
            bgColor: "gray-bg",
            centerElements: true,
            border: false,
            sectionFooter: ""
        },
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

        // get the features in components
        const features = this.state.features.map((feature, index) => {
            return <Feature key={index} featureInfo={feature}/>
        })

        // get the advantages in components
        const advantages = this.state.advantages.map((advantage, index) => {
            return <Advantage key={index} advantageInfo={advantage}/>
        })

        // get the steps sections in components
        const steps = this.state.stepsSections.map((section, index) => {
            return <SectionWrapper 
                        id="howto"
                        key={index} 
                        sectionInfo={section}
                        contentWithoutContainer={true}
                    >
                    {index === 1 ? (
                        <ul className="fb4-list-type m-40px-b m-20px-t p-0px">
                            <Platforms />
                        </ul>
                    ) : null}
                    </SectionWrapper>
        })

        // get pricing
        const prices = this.state.pricing.map((price, index) => {
            return <Price 
                        plan={price.plan}
                        price={price.price}
                        currency={price.currency}
                        subscription={price.subscription}
                        spacesNumber={price.spacesNumber}
                        spacesDescription={price.spacesDescription}
                        chanelsNumber={price.chanelsNumber}
                        featuresNumber={price.featuresNumber}
                        dailyInteractions={price.dailyInteractions}
                        buttonLink={price.buttonLink}
                        buttonText={price.buttonText}
                        offerAmmount={price.offerAmmount}
                        offerDetails={price.offerDetails}                    
                    />
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
                    <SectionWrapper 
                        id="advantages" 
                        sectionInfo={this.state.advantagesSection}>
                        <ul className="fb4-list-type m-30px-b m-20px-t p-0px">
                            {advantages}
                        </ul>
                    </SectionWrapper>
                    {steps}
                    <SingleSectionWrapper 
                        id="price"
                        sectionInfo={this.state.pricingSection}>
                        {prices}
                    </SingleSectionWrapper>
                    <SingleSectionWrapper
                        id="contact"
                        sectionInfo={this.state.contactSection}>
                    </SingleSectionWrapper>
                </Main>
            </div>
        );
    }
}
    
export default App;
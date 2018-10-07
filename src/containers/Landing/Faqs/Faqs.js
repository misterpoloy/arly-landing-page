import React, { Component } from "react";

import Faq from '../../../components/Faq/Faq';

class Faqs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: [
                {
                    number: "1",
                    question: "For what platforms can we have a bot?",
                    answer: "You can choose different platforms in which they are"
                },
                {
                    number: "2",
                    question: "Can I have a bot for WhatsApp?",
                    answer: "Currently for issues that are not in our hands and that include development and privacy policies of WhatsApp company, we can not develop it directly for this platform but soon the necessary development for WhatsApp business will be enabled"
                },
                {
                    number: "3",
                    question: "What forms of payments do you accept?",
                    answer: "We accept all forms of payments."
                },
                {
                    number: "4",
                    question: "How they protect my data and those of my clients?",
                    answer: "Arly handles rigorous privacy policies that are linked to international policy standards that guarantee the protection of our customers' data and in no way will the data provided be leaked or have any type of problem with data leakage. Within our security measures we can highlight:"
                },
                {
                    number: "5",
                    question: "How does alry stores my data?",
                    answer: "Arly stores the data in a secure way so that it is integrated with the different servers that provide the confidence of having data and personalized information of each client within the platform."
                },
                {
                    number: "6",
                    question: "Can I upgrade my plan?",
                    answer: "Yes, you can make an upgrade of your plan by updating within our page to the plan you want to opt for."
                },
                {
                    number: "7",
                    question: "Is there a version of in-house to install in the company?",
                    answer: "Yes, If you need a customized Arly for your company you can write to hello@arlystores.com"
                },
                {
                    number: "8",
                    question: "What happens if I have more than 1000 users a day?",
                    answer: "If your company has more than 1000 users per day, you can contact us directly so that we can provide you with a more complete and personalized accessory adjusted to the size of your company. Write to hello@arlystores.com"
                },
                {
                    number: "9",
                    question: "What is a daily interaction?",
                    answer: "How many different customers talks to you company each day."
                },
            ]
        }
    }

    render() {
        const faqs =
            this.state.faqs.map((faq, index) => {
                return <Faq 
                    key={index}
                    number={faq.number}
                    question={faq.question}
                    answer={faq.answer}
                />
            })
        
        return (
            <section class="section gray-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="faq-box" id="accordion">
                                {faqs}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Faqs;
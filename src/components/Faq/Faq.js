import React, { Component } from 'react';

class Faq extends Component {
    constructor() {
        super();
        this.state = {
            openDropdown: false
        }
    }

    openDropdown = () => {
        const prevState = {...this.state};
        this.setState({
            openDropdown: !prevState.openDropdown
        })
    }

    render() {
        const labelledby = "faqa-" + this.props.number;
        const id = "faqc-" + this.props.number;
        const target = "#" + id;
        let dropdownClass = "collapse"

        if (this.state.openDropdown) {
            dropdownClass += " show";
        }

        return (
            <div className="faq-row">
                <div onClick={this.openDropdown} className="faq-header" id={labelledby}>
                    <h5 className="faq-title" data-toggle="collapse" data-target={target} data-aria-expanded="true" data-aria-controls="faqc-1">
                    <span className="no theme-g-bg">{this.props.number}</span> {this.props.question}
                    </h5>
                </div>
                <div id={id} className={dropdownClass} aria-labelledby={labelledby} data-parent="#accordion">
                    <div className="faq-body">
                        <div dangerouslySetInnerHTML={{ __html: this.props.answer }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;
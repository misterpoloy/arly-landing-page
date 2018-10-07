import React from 'react';

const faq = (props) => {
    const labelledby = "faqa-" + props.number;
    const id = "faqc-" + props.number;
    const target = "#" + id;

    return (
        <div className="faq-row">
            <div className="faq-header" id={labelledby}>
                <h5 className="faq-title" data-toggle="collapse" data-target={target} data-aria-expanded="true" data-aria-controls="faqc-1">
                <span className="no theme-g-bg">{props.number}</span> {props.question}
                </h5>
            </div>
            <div id={id} className="collapse" aria-labelledby={labelledby} data-parent="#accordion">
                <div className="faq-body">
                    <div dangerouslySetInnerHTML={{ __html: props.answer }} />
                </div>
            </div>
        </div>
    )
}

export default faq;
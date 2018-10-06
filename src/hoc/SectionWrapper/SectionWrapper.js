import React from 'react';

const sectionWrapper = (props) => {
    const sectionClass = "section " + props.sectionInfo.bgColor;
    const sectionIconClass = "fas " + props.sectionInfo.sectionIcon;
    const innerRowClass = props.sectionInfo.centerElements ? "row align-items-center" : "row";
    const sectionMedia = require('../../assets/img/' + props.sectionInfo.media);
    const inverse = props.sectionInfo.orientation === 'left' ? '' : 'order-md-2';
    const contentSideClass = props.sectionInfo.mediaSmall ? 'col-lg-7 col-md-8 ' + inverse : 'col-lg-6 col-md-6 ' + inverse;
    const mediaSideClass =  props.sectionInfo.mediaSmall ? 'col-lg-5 col-md-4' : 'col-lg-6 col-md-6';

    return (
        <section id={props.id} className={sectionClass}>
            <div className="container">
                <div className={innerRowClass}>
                    <div className={contentSideClass}>
                        <div className={props.sectionInfo.featureBox}>
                            {props.sectionInfo.sectionIcon !== '' ? (
                                <div class="icon">
                                    <i class={sectionIconClass}></i>
                                </div>
                            ) : null}
                            <h4 className="font-alt">{props.sectionInfo.title}</h4>
                            {props.sectionInfo.description !== '' ? (
                                <p>
                                    {props.sectionInfo.description}
                                    <br />
                                    <strong>{props.sectionInfo.descriptionHighlighted}</strong>
                                </p>
                            ) : null }
                            <div className="row">
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <div className={mediaSideClass}>
                        <img src={sectionMedia} title={props.sectionInfo.mediaTitle} alt={props.sectionInfo.mediaTitle} />
                    </div>
                </div>
                {props.sectionInfo.sectionFooter !== '' ? (
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br /><br />
                            <h4 className="font-alt">{props.sectionInfo.sectionFooter}</h4>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default sectionWrapper;
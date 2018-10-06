import React from 'react';

const singleSectionWrapper = (props) => {
    const sectionClass = "section " + props.sectionInfo.bgColor;

    return (
        <section id={props.id} className={sectionClass}>
            <div className="container">
                <div className="row justify-content-center m-20px-b sm-m-5px-b">
                    <div className="col-12 col-md-10 col-lg-7">
                        <div className="section-title text-center">
                            <h2 className="font-alt">{props.sectionInfo.title}</h2>
                            {props.sectionInfo.border ? (
                                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-cener">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default singleSectionWrapper;
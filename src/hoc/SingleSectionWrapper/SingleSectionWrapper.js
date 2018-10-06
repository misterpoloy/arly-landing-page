import React from 'react';

const singleSectionWrapper = (props) => {
    const sectionClass = "section " + props.sectionInfo.bgColor;

    return (
        <section id={props.id} className={sectionClass}>
            <div class="container">
                <div class="row justify-content-center m-20px-b sm-m-5px-b">
                    <div class="col-12 col-md-10 col-lg-7">
                        <div class="section-title text-center">
                            <h2 class="font-alt">{props.sectionInfo.title}</h2>
                            {props.sectionInfo.border ? (
                                <div class="title-border"><span class="lg"></span><span class="md"></span><span class="sm"></span></div>
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
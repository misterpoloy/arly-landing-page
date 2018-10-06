import React from 'react';

const header = (props) => {
    const backgroundImage = require('../../assets/img/' + props.headerInfo.background);
    const bannerImage = require('../../assets/img/' + props.headerInfo.banner);

    // styles applied to header background
    const styles = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }

    if ( props.isHome ) {
        return (
            <section id="homea" className="home-banner-02 theme-g-bg">
                <div className="bg-effect">
                    <img src={backgroundImage} title="" alt="" />
                </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col col-md-10 col-lg-7 col-xl-6 p-80px-tb md-p-30px-b" >
                            <div className="home-text-center theme-after m-50px-t md-m-20px-t">
                                <h1 className="font-alt">{props.headerInfo.title}</h1>
                                <p>{props.headerInfo.description}</p>
                                <div className="app-btn-set">
                                    <a href={props.headerInfo.buttonLink} className="m-btn m-btn-white" data-text={props.headerInfo.buttonText}>{props.headerInfo.buttonText}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-6 home-right">           
                            <img src={bannerImage} title="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="page-title theme-after" style={styles}>
            <div className="container">
                <h1>{props.headerInfo.title}</h1>
            </div>
        </section>
    );
}

export default header;
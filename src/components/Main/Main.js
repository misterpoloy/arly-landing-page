import React from 'react';

// imgs
import headerBackground from '../../assets/img/bg-effect-1.svg'
import headerBannerHome from '../../assets/img/banner1.png';

const main = () => {
    return (
        <main>
            <section id="homea" className="home-banner-02 theme-g-bg">
                <div className="bg-effect">
                    <img src={headerBackground} title="" alt="" />
                </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                    <div className="col col-md-10 col-lg-7 col-xl-6 p-80px-tb md-p-30px-b" >
                        <div className="home-text-center theme-after m-50px-t md-m-20px-t">
                            <h1 className="font-alt">Artificial intelligence as a community manager</h1>
                            <p>Whether you want to start your business, scale or reduce your operating costs, Arly's platform helps you in the process. 
                            <strong>Imagine the concept of renting a place for your business, in Arly you can rent the online store, the staff and the distribution logistics.</strong>
                            </p>
                            <div className="app-btn-set">
                                <a href="#price" className="m-btn m-btn-white" data-text="limited availability">limited availability</a>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-12 col-lg-5 col-xl-6 home-right">           
                            <img src={headerBannerHome} title="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default main;
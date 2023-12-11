import React from 'react';
import '../style/card.css'


const Header = () => {

    return (
        <div>
            <section className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 left-side">
                            <div className="content-wrap">
                                <div className="content-inner">
                                    <div className="upper-heading">
                                        <p>3100+ Hiring Companies</p>
                                        <p>50% Avg Salary Hike</p>
                                    </div>
                                    <h3 className="heading">
                                        <span className="auto-type">
                                            Inspring stories of success from our learners
                                        </span>
                                    </h3>
                                </div>
                                <div className="btn-wrap">
                                    <div className="wrapper-btn">
                                        <button>explore career transition</button>
                                        <button>view testimonial</button>
                                    </div>
                                    <p className="desc">Trusted by 9.2 Million+ learners from over 170 countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 right-side">
                            <div className="img-box">
                                <div className="img-part first">
                                    <img src="../image/blazers-2.webp" alt="" />
                                </div>
                                <div className="img-part second">
                                    <img src="../image/blazers-2.webp" alt="" />

                                </div>
                                <div className="img-part third">
                                    <img src="../image/blazers-2.webp" alt="" />
                                </div>
                                <div className="img-part fourth">
                                    <img src="../image/blazers-2.webp" alt="" />
                                </div>
                                <div className="img-part fiveth">
                                    <img src="../image/blazers-2.webp" alt="" />
                                </div>
                                <div className="img-part sixth">
                                    <img src="../image/blazers-2.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >



        </div >
    );
}

export default Header;

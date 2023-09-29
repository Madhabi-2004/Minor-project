import React from 'react';
// import './style.css'; // Import your custom CSS file
import './About.css'; // Import your Bootstrap CSS file
import picture from '../../asset/download.png'

function AboutUs() {
    return (
        <div>
            <section className="about-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="img-head">
                                <img src={picture} alt="about.img" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2 className="text-head">KNOW MORE ABOUT US</h2>
                            <div className="break-small mb-2"></div>
                            <p className="text-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                <br />
                                ex soluta architecto nihil eos dolorum! Minima perferendis dolore
                                <br />
                                mque pariatur deleniti architecto quas officia, dignissimos, facere
                                <br />
                                nam, doloribus quod aliquam! Omnis sunt fuga perferendis, ut qu
                                <br />
                                od recusandae totam voluptatum vitae et accusantium modi natus
                                <br />
                                explicabo, quaerat sequi. Molestias aut perspiciatis nam!
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-4 mb-2 mb-md-0">
                                    <div className="box">
                                        <i className="fa fa-users mb-3"></i>
                                        <h4 className="mb-0">TOTAL<br /> CLIENTS</h4>
                                        <p className="mb-0">999</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 mb-2 mb-md-0">
                                    <div className="box">
                                        <i className="fa fa-wrench mb-3"></i>
                                        <h4 className="mb-0">PROJECTS<br />DONE</h4>
                                        <p className="mb-0">900</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;

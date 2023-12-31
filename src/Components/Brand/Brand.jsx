import React from "react";
import './Brand.css'
import Image1 from "../../asset/img.png"
import Image2 from "../../asset/img2.png"
import Image3 from "../../asset/img3.png"
import Image4 from "../../asset/img4.png"
import Image5 from "../../asset/img5.png"
import Image6 from "../../asset/img6.png"
export default function Brand() {
    return (
        <div>
            <section className="brand-sec">
            <p className="h3 text-center text-center1 mb-5">Travel By Brand</p>
                <div className="container my-51">
                    <div className="row">
                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image1} alt="" /></figure>
                        </div>

                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image2} alt="" /></figure>
                        </div>

                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image3} alt="" /></figure>
                        </div>

                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image4} alt="" /></figure>
                        </div>

                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image5} alt="" /></figure>
                        </div>

                        <div className="col-md-2  border-1 py-4 text-center">
                            <figure><img className="img-fluid" src={Image6} alt="" /></figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
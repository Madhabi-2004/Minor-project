import React from "react";
import "./Card.css"
import card from "../../asset/image2.png"
import Taj from '../../asset/taj.jpg'
import Paris from '../../asset/shutterstock_667548661v2.jpg'
import London from '../../asset/89.jpg'
import Maldivs from '../../asset/355607_w-3840_h-2160_q-70_m-crop.jpg'
export default function Card() {
    return (
        <div>
            <section class="card-sec">
                <div class="container">
                    <div class="row gy-3 my-3">
                        <div class=" col-sm-6 col-md-3">
                            <div class="card">
                                <img src={Paris} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">PARIS</h5>
                                    <p class="card-text">Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy. It became known as the City of Light.The Eiffel Tower, the Louvre, the Panthéon, or the Sacré Coeur are surely some of the most recognizable things Paris is known for.</p>
                                    <a href="#" class="btn btn-primary">Go To Travel</a>
                                </div>
                            </div>
                        </div>

                        <div class=" col-sm-6 col-md-3">
                            <div class="card">
                                <img src={Taj} class="card-img-top" alt="card-img2" />
                                <div class="card-body">
                                    <h5 class="card-title">Taj Mohol</h5>
                                    <p class="card-text">The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.</p>
                                    <a href="#" class="btn btn-primary">Go To Travel</a>
                                </div>
                            </div>
                        </div>

                        <div class=" col-sm-6 col-md-3">
                            <div class="card">
                                <img src={London} class="card-img-top" alt="card-img2" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go To Travel</a>
                                </div>
                            </div>
                        </div>

                        <div class=" col-sm-6 col-md-3">
                            <div class="card" >
                                <img src={Maldivs} class="card-img-top" alt="card-img2" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go To Travel</a>
                                </div>
                            </div>
                        </div>

                        {/* <div class=" col-sm-6 col-md-3">
                    <div class="card" >
                    <img src={card} class="card-img-top" alt="card-img2"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go To Travel</a>
                        </div>
                    </div>
                </div>

                <div class=" col-sm-6 col-md-3">
                    <div class="card" >
                    <img src={card} class="card-img-top" alt="card-img2"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go To Travel</a>
                        </div>
                    </div>
                </div>

                <div class=" col-sm-6 col-md-3">
                    <div class="card" >
                    <img src={card} class="card-img-top" alt="card-img2"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go To Travel</a>
                        </div>
                    </div>
                </div>

                <div class=" col-sm-6 col-md-3">
                    <div class="card" >
                    <img src={card} class="card-img-top" alt="card-img2"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go To Travel</a>
                        </div>
                    </div>
                </div> */}
                    </div>
                </div>

            </section>
        </div>
    )
}
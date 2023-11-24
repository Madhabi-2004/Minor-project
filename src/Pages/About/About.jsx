import React from 'react';
import Picture1 from '../../asset/Hotel.jpg'
import Picture2 from '../../asset/plane.jpg'
import Picture3 from '../../asset/cost.jpg'
import Picture4 from '../../asset/hospitality.jpg'
import './About.css';

function AboutUs() {
    return(
        <>
        <section className='aboutSec'>
            <h2>About Us</h2>
            <div className="parts">
                <div className="innerPart">
                    <span><img src={Picture1} alt="" /></span>
                    <div className="para about1" >
                        <h5>Best Hotels</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis vero corrupti ducimus sunt, repudiandae atque neque eos consequatur ex!
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint odio dolorem molestias dicta, maxime esse vitae quas repellat ea perspiciatis.</p>
                    </div>
                </div>

                <div className="innerPart">
                    <span><img src={Picture2} alt="" /></span>
                    <div className="para">
                        <h5>Reliable Journey</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis vero corrupti ducimus sunt, repudiandae atque neque eos consequatur ex!
                        </p>
                    </div>
                </div>

                <div className="innerPart">
                    <span><img src={Picture3} alt="" /></span>
                    <div className="para">
                        <h5>Low Costing</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis vero corrupti ducimus sunt, repudiandae atque neque eos consequatur ex!
                        </p>
                    </div>
                </div>

                <div className="innerPart">
                    <span><img src={Picture4} alt="" /></span>
                    <div className="para">
                        <h5>Best Hospitality</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis vero corrupti ducimus sunt, repudiandae atque neque eos consequatur ex!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default AboutUs;
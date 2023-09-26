import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faBuilding } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";

export default function App() {
  const services = [
    { title: 'HOTEL', link: '#' },
    { title: 'FLIGHT', link: '#' },
    { title: 'TRAIN', link: '#' },
    { title: 'BUS', link: '#' },
  ];
  return (
    <div className='footer-body'>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-white1 text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faFacebook} beatFade style={{ color: "#e6180a", }} />
            </a>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faTwitter} bounce style={{ color: "#6ba1ff", }} />
            </a>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faInstagram} beatFade style={{ color: "#d433d7", }} />
            </a>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faLinkedin} bounce style={{ color: "#a10c0c", }} />
            </a>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faPinterest} beatFade style={{ color: "#e60505", }} />
            </a>
            <a href="" className="me-4 link-secondary">
              <FontAwesomeIcon icon={faYoutube} beatFade style={{ color: "#eb0000", }} />
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Multiverse Journeys
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* <!-- Links --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <u>Services</u>
                </h6>
                {services.map((service, index) => (
                  <p key={index}>
                    <a href={service.link} className="text-reset">
                      {service.title}
                    </a>
                  </p>
                ))}
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> */}
              {/* <!-- Links --> */}
              {/* <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4"><u>Contact</u></h6>
                <p><i className="fas fa-home me-3 text-secondary"></i><FontAwesomeIcon icon={faBuilding} beat style={{ color: "#ff0000", }} /> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3 text-secondary"></i><FontAwesomeIcon icon={faEnvelope} beat style={{ color: "#ff0000", }} />info@example.com</p>
                <p><i className="fas fa-phone me-3 text-secondary"></i><FontAwesomeIcon icon={faPhone} beat style={{ color: "#e00000", }} /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary"></i><FontAwesomeIcon icon={faPhone} beat style={{ color: "#e00000", }} /> + 01 234 567 89</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4 fw-bold" style={{ backgroundColor: '#D3D3D3' }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}
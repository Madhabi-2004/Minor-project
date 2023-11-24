import React from 'react';
import './Contact.css'


function Left(props) {
  const { content } = props;
  return (
    <div className="section">
      <h2>Where to find us</h2>
      <h3>Our Office</h3>
      <p>Fora HQ is proudly located in lower Manhattan.
        If you’re coming to visit, please confirm our address with your company contact. We do not accept visitors without an appointment.

      </p>
      <div className='content-2'>
      <p >
        Fill the from to contact us online
      </p>
      </div>
    </div>
  );
}

export default Left;

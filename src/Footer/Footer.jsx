import React from 'react';
import {FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-icons'>
          <FaTwitter size={30}/>
          <FaLinkedinIn size={30}/>
          <FaInstagram size={30}/>
          <FaFacebookF size={30}/>
        </div>
        <div className='footer-copyright'>
          <p>Copyright @ Company Pvt. Ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className='footer-links'>
          <p>
            <a href='#'>Privacy policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='#'>Terms of service</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='#'>Service Agreement</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='#'>Contact us</a>
          </p>
        </div>
      </div>
    );
  }
}
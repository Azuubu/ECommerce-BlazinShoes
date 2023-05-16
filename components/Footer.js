import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Blazin Shoes All Rights Reserved</p>
      <p className="icons">
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;

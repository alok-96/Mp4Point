import React from "react";
import "../Footer.css";
import logo from "../assets/favicon.png";
import {Heading} from '@chakra-ui/react';

import {
  AiFillCodepenCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyright">
        <div className="brand">
          <img src={logo} alt="logo-icon" style={{ width: "30px" }} />
          <Heading size={'md'}>Mp4Point</Heading>
        </div>
        <p>Copyright &copy; All Right Reserved.</p>
      </div>
      <div className="socials">
        <AiFillCodepenCircle />
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillGithub />
      </div>
    </div>
  );
};

export default Footer;

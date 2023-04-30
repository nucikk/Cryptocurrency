import React from "react";
import "../Style/footer.css";
import LogoFooter from "../Image/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerLinks  = [
    { title: "Concept" },
    { title: "Our Story" },
    { title: "Blog" },
    { title: "Careers" },
    { title: "Contact Us" },
  ];
  return (
    <div className="footer_section">
      <div className="footer_info">
        <img src={LogoFooter} alt={"logo"} />
        <div className="footer_links">
          {footerLinks .map((link, index) => (
            <a key={index}>{link.title}</a>
          ))}
        </div>

        <div className="footer_social">
        <a ><FaFacebook /></a>
        <a><FaInstagram /></a>
        <a><FaLinkedin /></a>
      </div>
      </div>
    </div>
  );
};

export default Footer;

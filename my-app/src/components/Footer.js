import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram} from 'react-icons/ai';
import {FaSnapchatSquare} from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Col 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li> <AiFillHome /> Riyadh, SA</li>
                <li> <AiOutlineMail /> info@exchange.com</li>
                <li> <AiOutlinePhone/>+966 56 123 4567</li>
              </ul>
            </div>
            {/* Col 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Site information</h4>
              <ul className="list-unstyled">
                <li> <a href="/cookies">COOKIE NOTICES </a> </li>
                <li> <a href="/privacy"> PRIVACY STATEMENT </a> </li>
                <li> <a href="/terms"> TERMS AND CONDITIONS</a> </li>
                <li> <a href="/sitemap"> SITEMAP </a> </li>
              </ul>
            </div>
            {/* Col 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Shipping companies</h4>
              <ul className="list-unstyled">
              <li> <a href="https://www.fedex.com/en-sa/customer-support.html">FedEx </a> </li>
                <li> <a href="https://www.dhl.com/sa-en/home.html"> DHL </a> </li>
                <li> <a href="https://splonline.com.sa/en/"> SPL</a> </li>
              </ul>
            </div>
            {/* Col 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Social media</h4>
              <ul className="list-unstyled">
              <li> <a href="/facebook"> <AiOutlineFacebook/> Facebook </a> </li>
                <li> <a href="/twitter"> <AiFillTwitterSquare/> Twitter </a> </li>
                <li> <a href="/instagram"> <AiOutlineInstagram/> Instagram </a> </li>
                <li> <a href="/snapchat"> <FaSnapchatSquare/> Snapchat </a> </li>
              </ul>
            </div>
          </div>
          {/* Copy Rights */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Exchange Website - All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
  font-family: "Yeseva One", cursive;
  font-size: 15px;
    background: var(--mainWhite);
    padding-top: 3rem;
    color: var(--mainDark);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a{
    color: var(--mainGrey);
}
ul li a:hover{
    color: var(--mainLight);
}
`;

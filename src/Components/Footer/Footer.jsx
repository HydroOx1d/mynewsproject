import React from 'react';
import './Footer.css'
import { FaTwitter, FaInstagram, FaTelegramPlane, FaWhatsapp, } from "react-icons/fa";
import { AiOutlineFacebook } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">News.kg</div>
          <div className="footer__social">
            <a href="" className="footer__social__link"><FaTwitter/></a>
            <a href="" className="footer__social__link"><AiOutlineFacebook/></a>
            <a href="" className="footer__social__link"><FaInstagram/></a>
            <a href="" className="footer__social__link"><FaWhatsapp/></a>
            <a href="" className="footer__social__link"><FaTelegramPlane/></a>
          </div>
          <div className="footer__address">
            <p className="footer__address__number">+996-(709)-77-94-23</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom__content">
            <p className="footer__text">Все права защищены</p>
            <p className="footer__text">Designed by: ARS.T 2021</p>
            <a href="" className="footer__text">news@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Prince keshari/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/prince-keshari-6ab1b0225" class="footer__social-link" target="_blank">
    <i class="bx bxl-linkedin"></i>
</a>


                <a href="https://github.com/gleaminggithub" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

            </div>

            <span className="footer__copy">&#169; Prince keshari. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
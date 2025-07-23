'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer clearfix">
      <div className="container">
        {/* Contact Info Section */}
        <div className="first-footer">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-contact-links-wrapper d-flex flex-wrap justify-content-between">
                {/* Phone */}
                <div className="footer-contact-link-wrapper d-flex align-items-center mb-3">
                  <div className="icon-footer me-3"><i className="flaticon-phone-call"></i></div>
                  <div>
                    <h6>Call us</h6>
                    <p>+971 52-333-4444</p>
                  </div>
                </div>
                {/* Email */}
                <div className="footer-contact-link-wrapper d-flex align-items-center mb-3">
                  <div className="icon-footer me-3"><i className="omfi-envelope"></i></div>
                  <div>
                    <h6>Email</h6>
                    <p>info@renax.com</p>
                  </div>
                </div>
                {/* Location */}
                <div className="footer-contact-link-wrapper d-flex align-items-center mb-3">
                  <div className="icon-footer me-3"><i className="omfi-location"></i></div>
                  <div>
                    <h6>Address</h6>
                    <p>Dubai, Water Tower, Office 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="second-footer mt-5">
          <div className="row">
            {/* About / Logo */}
            <div className="col-md-4">
              <div className="footer-logo mb-3">
                <img src="/img/logo-light.png" alt="Renax Logo" />
              </div>
              <p>
                Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.
              </p>
              <div className="social-icons mt-3">
                <ul className="list-inline d-flex gap-3">
                  <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 offset-md-1">
              <h3 className="widget-title">Quick Links</h3>
              <ul className="list-unstyled">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/cars">Cars</Link></li>
                <li><Link href="/car-types">Car Types</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Subscribe Form */}
            <div className="col-md-4">
              <h3 className="widget-title">Subscribe</h3>
              <p>Want to be notified about our services? Sign up and get updates by email.</p>
              <form action="#" className="d-flex mt-3">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Email Address"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <i className="ti-arrow-top-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bottom-footer-text text-center mt-5 pt-4 border-top">
          <p className="mb-0">
            &copy; 2025 <a href="#">Renax</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

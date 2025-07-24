"use client";

import Link from "next/link";

export default function Footer() {
  return (
    // <!-- Footer -->
    <footer className="footer clearfix">
      <div className="container">
        {/* <!-- first footer --> */}
        <div className="first-footer">
          <div className="row">
            <div className="col-md-12">
              <div className="links dark footer-contact-links">
                <div className="footer-contact-links-wrapper">
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="flaticon-phone-call"></i>{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Call us</h6>
                      <p>+971527277464</p>
                    </div>
                  </div>
                  <div className="footer-contact-links-divider"></div>
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="omfi-envelope"></i>{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Write to us</h6>
                      <p>info@dazzlewheels.ae</p>
                    </div>
                  </div>
                  <div className="footer-contact-links-divider"></div>
                  <div className="footer-contact-link-wrapper">
                    <div className="image-wrapper footer-contact-link-icon">
                      <div className="icon-footer">
                        {" "}
                        <i className="omfi-location"></i>{" "}
                      </div>
                    </div>
                    <div className="footer-contact-link-content">
                      <h6>Address</h6>
                      <p>Office 6, Crystal Tower, Business Bay, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- second footer --> */}
        <div className="second-footer">
          <div className="row">
            {/* <!-- about & social icons --> */}
            <div className="col-md-4 widget-area">
              <div className="widget clearfix">
                <div className="footer-logo">
                  <img src="https://cms.dazzlewheels.ae/public/uploads/rlYaXzwO9NXxDOJ9mMdlkG2gf9chBafmgs17qjuU.png" alt="" />
                </div>
                {/* <!-- <div className="footer-logo"><h2>CARE<span>X</span></h2></div> --> */}
                <div className="widget-text">
                  <p>
                    Dazzle Wheels is the best luxury car rental services in Dubai, we have a big fleet of 50 sports and luxury vehicles, we are known for the professional services, we offer a wide range of supercars, luxury cars & Suvs in the market for daily rental.
                  </p>
                  <div className="social-icons">
                    <ul className="list-inline">
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- quick links --> */}
            <div className="col-md-3 col-12 offset-2 widget-area">
              <div className="widget clearfix usful-links">
                <h3 className="widget-title">Brands</h3>
                <ul>
                  <li><Link href="/all-vehicles/audi">Audi</Link></li>
                    <li><Link href="/all-vehicles/ferrari">Ferrari</Link></li>
                    <li><Link href="/all-vehicles/lamborghini">Lamborghini</Link></li>
                    <li><Link href="/all-vehicles/mclaren">Mclaren</Link></li>
                    <li><Link href="/all-vehicles/mercedes">Mercedes</Link></li>
                    <li><Link href="/all-vehicles/porsche">Porsche</Link></li>
                    <li><Link href="/all-vehicles/range-rover">Range Rover</Link></li>
                    <li><Link href="/all-vehicles/rolls-royce">Rolls Royce</Link></li>
                </ul>
              </div>
            </div>
            {/* <!-- subscribe --> */}
            <div className="col-md-3 col-12 widget-area">
              <div className="widget clearfix usful-links">
                <h3 className="widget-title">Quick Links</h3>
                <ul>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="our-services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bottom footer --> */}
        <div className="bottom-footer-text">
          <div className="row copyright">
            <div className="col-md-12">
              <p className="mb-0">
                &copy;2025 <Link href="#">Dazzle Wheels</Link>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

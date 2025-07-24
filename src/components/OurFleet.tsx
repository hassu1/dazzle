'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function OurFleet() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      const $carousel = $('.cars2 .owl-carousel');

      // Destroy previous instance if exists
      if ($carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }

      // Initialize Owl Carousel with your latest config
      $carousel.owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: [
          "<span class='lnr ti-angle-left'></span>",
          "<span class='lnr ti-angle-right'></span>",
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      });
    } else {
      console.warn('jQuery or OwlCarousel is not loaded.');
    }

    // Cleanup when component unmounts
    return () => {
      const $ = window.$ || window.jQuery;
      const $carousel = $('.cars2 .owl-carousel');

      if ($ && $.fn.owlCarousel && $carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }
    };
  }, [pathname]);

  return (
    <>
      {/* <!-- Cars 2 --> */}
      <section className="cars2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Select Your Car</div>
              <div className="section-title">
                Luxury <span>Car Fleet</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-theme owl-carousel">
                {/* ← your car items here — keep them same as before → */}
                <div className="item">
                  {" "}
                  <img src="img/blog/8.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>Bugatti Mistral W16</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 4 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-user"></i> Age 25
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="car-details2.html" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $800
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <img src="img/blog/6.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>Audi RS7 Sportback</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 4 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-luggage"></i> 2 Bags
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="#!" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $600
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <img src="img/blog/9.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>Bugatti Mistral W16</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 4 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-user"></i> Age 25
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="#!" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $900
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <img src="img/blog/10.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>AUDI Q8</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 3 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-luggage"></i> 2 Bags
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="#!" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $450
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <img src="img/blog/11.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>Bentley Bentayga</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 3 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-luggage"></i> 2 Bags
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="#!" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $600
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <img src="img/blog/7.jpg" className="img-fluid" alt="" />
                  <div className="bottom-fade"></div>
                  <div className="title">
                    <h4>Aston Martin DBS</h4>
                    <div className="details">
                      <span>
                        <i className="omfi-door"></i> 3 Seats
                      </span>
                      <span>
                        <i className="omfi-transmission"></i> Auto
                      </span>
                      <span>
                        <i className="omfi-user"></i> Age 25
                      </span>
                    </div>
                  </div>
                  <div className="curv-butn icon-bg">
                    <Link href="#!" className="vid">
                      <div className="icon">
                        {" "}
                        <i className="icon-show">
                          <span>
                            $550
                            <br />
                            <i>day</i>
                          </span>
                        </i>
                        <i className="ti-arrow-top-right icon-hidden"></i>{" "}
                      </div>
                    </Link>
                    <div className="br-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1b1b1b"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

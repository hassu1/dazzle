'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FleetCategory() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      const $carousel = $('.car-types4 .owl-carousel');

      if ($carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }

      $carousel.owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
        navText: [
          "<span class='lnr ti-angle-left'></span>",
          "<span class='lnr ti-angle-right'></span>",
        ],
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      });
    } else {
      console.warn('jQuery or OwlCarousel is not loaded');
    }

    return () => {
      const $carousel = $('.car-types4 .owl-carousel');
      if ($ && $.fn.owlCarousel && $carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }
    };
  }, [pathname]);
  
    return(
        <>
            {/* <!-- Car Category --> */}
    <section className="car-types4 section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-30">
                    <div className="section-subtitle">Categories</div>
                    <div className="section-title">Rental <span>Car Types</span></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="owl-carousel owl-theme">
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/02.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Luxury Cars</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/03.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Sport Cars</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/06.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Convertible</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/01.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Luxury Cars</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/04.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Sport Cars</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-15">
                        <div className="img"> <img src="img/cars/05.jpg" className="img-fluid" alt="" /> </div>
                        <div className="info">
                            <h2 className="title">Convertible</h2>
                            <p className="subtitle">Car Types</p>
                        </div>
                        <div className="curv-butn icon-bg">
                            <a href="#" className="vid">
                                <div className="icon"> <i className="ti-arrow-top-right"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
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
    )
}
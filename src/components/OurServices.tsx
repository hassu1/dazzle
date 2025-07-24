'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function OurServices() {

    const pathname = usePathname();

  useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      const $carousel = $('.services1 .owl-carousel');

      // Destroy existing instance
      if ($carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }

      // Initialize the carousel
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

    // Cleanup
    return () => {
      const $carousel = $('.services1 .owl-carousel');
      if ($ && $.fn.owlCarousel && $carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.removeClass('owl-loaded owl-hidden');
      }
    };
  }, [pathname]);
 
  return (
    <>
        {/* <!-- Services 1 --> */}
    <section className="services1 section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-30">
                    <div className="section-subtitle">What We Do</div>
                    <div className="section-title">Our <span>Services</span></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="text">
                            <h5>Corporate Car Rental</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h5>Car Rental with Driver</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h5>Airport Transfer</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h5>Fleet Leasing</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h5>VIP Transfer</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h5>Private Transfer</h5>
                            <p>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</p>
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

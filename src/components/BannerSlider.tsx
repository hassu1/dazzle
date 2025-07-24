"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import BannerForm from '@components/components/Banner';

export default function BannerSlider() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      // Destroy existing carousel if initialized
      const $owl = $(".slider-fade .owl-carousel");
      if ($owl.hasClass("owl-loaded")) {
        $owl.trigger("destroy.owl.carousel");
        $owl.find(".owl-stage-outer").children().unwrap();
        $owl.removeClass("owl-loaded");
        $owl.removeClass("owl-hidden");
      }

      // Initialize owl carousel
      $owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: "fadeOut",
        nav: false,
        navText: [
          '<i class="ti-angle-left" aria-hidden="true"></i>',
          '<i class="ti-angle-right" aria-hidden="true"></i>',
        ],
      });
    } else {
      console.warn("jQuery or Owl Carousel plugin not loaded");
    }

    return () => {
      if ($ && $.fn.owlCarousel) {
        const $owl = $(".slider-fade .owl-carousel");
        if ($owl.hasClass("owl-loaded")) {
          $owl.trigger("destroy.owl.carousel");
          $owl.find(".owl-stage-outer").children().unwrap();
          $owl.removeClass("owl-loaded");
          $owl.removeClass("owl-hidden");
        }
      }
    };
  }, [pathname]);

  const slides = [
  {
    id: 1,
    title: "Rental Car",
    subtitle: "* Premium",
    description: "Bentley Bentayga",
    price: 600,
    img: "/img/slider/11.jpg",
  },
  {
    id: 2,
    title: "Rental Car",
    subtitle: "* Premium",
    description: "Rolls Royce Cullinan",
    price: 900,
    img: "/img/slider/12.jpg",
  },
  {
    id: 3,
    title: "Rental Car",
    subtitle: "* Premium",
    description: "Audi RS7 Sportback",
    price: 450,
    img: "/img/slider/14.jpg",
  },
];

  return (
     <>
    {/* Slider */}
    <header className="header slider-fade">
      <div className="owl-carousel owl-theme">
        {slides.map(({ id, title, subtitle, description, price, img }) => (
          <div
            key={id}
            className="item bg-img"
            style={{
              backgroundImage: `url('${img}')`,
              position: "relative",
            }}
            data-overlay-dark="5"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  {/* Text Content */}
                  <div className="col-lg-6 col-md-6 mb-30">
                    <div className="v-middle">
                      <h6>{subtitle}</h6>
                      <h1>{title}</h1>
                      <h5>
                        {description} <span>${price} <i>/ day</i></span>
                      </h5>
                      <a href="#0" className="button-1 mt-15 mb-15">
                        View Details <span className="ti-arrow-top-right"></span>
                      </a>
                      <a href="#" data-scroll-nav="1" className="button-2 mt-15 mb-15">
                        Rent Now <span className="ti-arrow-top-right"></span>
                      </a>
                    </div>
                  </div>

                  {/* BannerForm always shown on every slide */}
                  <div className="col-lg-6 col-md-7" style={{ position: "relative", zIndex: 999 }}>
                    <BannerForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  </>
  );
}

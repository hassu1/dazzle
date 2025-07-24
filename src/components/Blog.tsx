'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Blog() {

const pathname = usePathname();

  useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      const $owl = $('.blog1 .owl-carousel');

      // Destroy if already initialized
      if ($owl.hasClass('owl-loaded')) {
        $owl.trigger('destroy.owl.carousel');
        $owl.find('.owl-stage-outer').children().unwrap();
        $owl.removeClass('owl-loaded owl-hidden');
      }

      // Init OwlCarousel
      $owl.owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: [
          "<span class='lnr ti-angle-left'></span>",
          "<span class='lnr ti-angle-right'></span>"
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    } else {
      console.warn('jQuery or OwlCarousel not loaded');
    }

    // Clean-up
    return () => {
      if ($ && $.fn.owlCarousel) {
        const $owl = $('.blog1 .owl-carousel');
        if ($owl.hasClass('owl-loaded')) {
          $owl.trigger('destroy.owl.carousel');
          $owl.find('.owl-stage-outer').children().unwrap();
          $owl.removeClass('owl-loaded owl-hidden');
        }
      }
    };
  }, [pathname]);

  return (
    <>
      {/* <!-- Blog 1 --> */}
      <section className="blog1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Our Blog</div>
              <div className="section-title">
                Latest <span>News</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/03.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="#">29 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Olivia D.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          Documents required for car rental
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/04.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="#">27 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Martin C.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          Rental cost of sport and other cars
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/05.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="#">25 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Martin C.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          Rental cars how to check driving fines?
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/06.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="#">23 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Arya T.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          How to Rent a Car at the Airport Terminal?
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/01.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="blog1.html">22 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Micheal B.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          Penalties for violating the rules in rental cars
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    {" "}
                    <img src="img/blog/02.jpg" alt="" />{" "}
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      {" "}
                      <a href="#">21 Dec, 2025</a>{" "}
                    </div>
                    <div className="con">
                      <div className="category">
                        {" "}
                        <a href="#">
                          <i className="ti-user"></i>Daniel K.
                        </a>{" "}
                        <a href="#">
                          <i className="ti-comment"></i>5 Comments
                        </a>{" "}
                      </div>
                      <div className="text">
                        {" "}
                        <a href="post.html">
                          How to check a car before renting?
                        </a>{" "}
                      </div>{" "}
                      <a href="post.html" className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
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

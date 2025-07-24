'use client';

import Header from '@components/components/Header';
import Footer from '@components/components/Footer';

import Link from 'next/link';

export default function blogs() {
  return (
    <>
      <Header />

      {/* <!-- Header Banner --> */}
      <section
        className="banner-header section-padding bg-img"
        data-overlay-dark="6"
        data-background="img/slider/1.jpg"
      >
        <div className="v-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h6>Blog & News</h6>
                <h1>Latest News</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* <!-- Blog --> */}
      <section className="blog1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/03.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="#">29 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Olivia D.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        Documents required for car rental
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/04.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="#">27 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Martin C.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        Rental cost of sport and other cars
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/05.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="#">25 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Martin C.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        Rental cars how to check driving fines?
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/06.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="#">23 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Arya T.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        How to Rent a Car at the Airport Terminal?
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/01.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="blog1">22 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Micheal B.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        Penalties for violating the rules in rental cars
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="item">
                <div className="img">
                  {" "}
                  <img src="img/blog/02.jpg" alt="" />{" "}
                </div>
                <div className="wrapper">
                  <div className="date">
                    {" "}
                    <Link href="#">21 Dec, 2025</Link>{" "}
                  </div>
                  <div className="con">
                    <div className="category">
                      {" "}
                      <Link href="#">
                        <i className="ti-user"></i>Daniel K.
                      </Link>{" "}
                      <Link href="#">
                        <i className="ti-comment"></i>5 Comments
                      </Link>{" "}
                    </div>
                    <div className="text">
                      {" "}
                      <Link href="post">
                        How to check a car before renting?
                      </Link>{" "}
                    </div>{" "}
                    <Link href="post" className="icon-btn">
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Pagination --> */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="pagination-wrap">
                <li>
                  <Link href="blog2#">
                    <i className="ti-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="blog2#">1</Link>
                </li>
                <li>
                  <Link href="blog2#" className="active">
                    2
                  </Link>
                </li>
                <li>
                  <Link href="blog2#">3</Link>
                </li>
                <li>
                  <Link href="blog2#">
                    <i className="ti-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

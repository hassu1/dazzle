"use client";
import Header from "@components/components/Header";
import Footer from "@components/components/Footer";
import Image from "next/image";

export default function OurService() {
  return (
    <>
      <Header />

      <section
        className="banner-header section-padding bg-img"
        style={{
          backgroundImage: `url('/img/slider/1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "130px 0px",
          height: "auto",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        <div className="v-middle" style={{ position: "relative", zIndex: 2 }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-white">
                <h1>
                  <span style={{ color: "#f0c000" }}>Our Services</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars3 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/carDesert.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3 className="text-white mt-3 text-center">Desert Safari</h3>
                <p className="text-white text-center">
                  We have a team To assist you with desert safari packages offer
                  entertainment and has proven to be excellent in services and
                  capturing the hearts of our valuable guests. It provides
                  guests a fun and thrilling experience in the desert, For
                  bookings and other enquiries, feel free to get in touch with
                  us.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/hotel.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3 className="text-white mt-3 text-center">Hotel Booking</h3>
                <p className="text-white text-center">
                  We can help you book hotels, We&apos;re passionate about
                  travel and aim to inspire millions of travelers across the
                  globe. So, when it comes to booking the perfect hotel, we&apos;ve
                  got you covered.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="p-2">
                <Image
                  src="/img/yacht.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3 className="text-white mt-3 text-center">Yachts</h3>
                <p className="text-white text-center">
                  We Can Help You with luxury yachts to allow guests to enjoy a
                  truly memorable cruise along the outstanding coastline of
                  Dubai. Relax under the warmth of the sun or treat your eyes to
                  unbeatable views of the Dubai skyline as you cruise through
                  the sparkling waters. Whether you opt for the yacht to
                  celebrate a birthday or have a fun day out with friends, we
                  ensure to tailor it in line with your specific needs. So,
                  contact us today to book a yacht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

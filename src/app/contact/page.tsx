"use client";

import Header from '@components/components/Header';
import Footer from '@components/components/Footer';

export default function ContactPage() {
  return (
    <>

    <Header />

      {/* Header Banner */}
      <section
        className="banner-header middle-height section-padding bg-img"
        style={{
          backgroundImage: "url('/img/slider/4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
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
                <h6>Get in touch</h6>
                <h1 className="text-white">
                  Contact <span style={{ color: "#f0c000" }}>Us</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Box */}
      <div className="contact-box section-padding">
        <div className="container">
          <div className="row">
            {[
              {
                icon: "omfi-envelope",
                title: "Email us",
                text: "info@dazzlewheels.ae",
              },
              {
                icon: "omfi-location",
                title: "Our address",
                text: "Office No.6, 10th Floor, Exponenta Business Center, Crystal Tower - Business Bay, Dubai, UAE",
              },
              {
                icon: "omfi-phone",
                title: "Call us",
                text: "+971527277464",
              },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-4 col-12 mb-4">
                <div className={`item ${i === 3 ? "active" : ""}`}>
                  <span className={`icon ${item.icon}`}></span>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <i className={`numb ${item.icon}`}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            {/* Form */}
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="form-box">
                <h5>Get in touch</h5>
                <form
                  method="POST"
                  action=""
                >
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: "none" }}
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Your Number *"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        cols={30}
                        rows={4}
                        placeholder="Message *"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" className="w-100" value="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-5 offset-lg-1 col-md-12">
              <h5>Location</h5>
              <div className="">
                <iframe
                  className=""
                  width="100%"
                  height="415"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2661945287937!2d55.28672631500947!3d25.1942439838976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b085cce46d2441e!2sMillennium%20Central%20Downtown!5e0!3m2!1sen!2s!4v1643803305865!5m2!1sen!2s"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </>
  );
}

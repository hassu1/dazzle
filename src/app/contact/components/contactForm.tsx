export default function contactForm() {
  return (
    <>
      {/* Contact Form and Map */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            {/* Form */}
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="form-box">
                <h5>Get in touch</h5>
                <form method="POST" action="">
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
                      <input
                        type="submit"
                        className="w-100"
                        value="Send Message"
                      />
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
    </>
  );
}

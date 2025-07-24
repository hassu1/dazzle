export default function contactBox() {
  return (
    <>
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
    </>
  );
}

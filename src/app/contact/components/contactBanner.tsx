'use client';
export default function contactBanner() {
  return (
    <>
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
    </>
  );
}

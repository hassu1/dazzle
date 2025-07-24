'use client';
export default function serviceBanner(){
    return(
        <>
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
        </>
    )
}
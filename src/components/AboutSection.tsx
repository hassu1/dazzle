'use client';
import Image from 'next/image'
export default function AboutSection(){
    return(
        <>
             {/* <!-- About --> */}
    <section className="about section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="content">
                        <div className="section-subtitle">Dazzle Wheels</div>
                        <div className="section-title">ABOUT COMPANY</div>
                        <p className="mb-30" style={{ fontSize: '17px'}}>Dazzle Wheels Car Rental is the best luxury car rental services in Dubai, we have a big fleet of 50 sports and luxury vehicles, we are known for the professional services we offer, We offer a wide range of supercars, luxury cars & Suvs in the market for daily rental, The difference is in the details and that’s why our car rental services are the best in town, with a team of experts and quality trained professionals in the tourism and automobile industry, we stand out for quality and good taste, to offer you with a unique experience, get in touch with us to know more.</p>
                        <ul className="list-unstyled list mb-30 d-flex align-items-center justify-content-between">
                            <li style={{ marginTop:'0.6rem;'}}>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>Luxury Cars</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>Economy Cars</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>Sports Cars</p>
                                </div>
                            </li>
                        </ul> 
                         <ul className="list-unstyled list d-flex align-items-center justify-content-between">
                              <li style={{ marginTop:'0.6rem;'}}>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>SUV Cars</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>Coupe Cars</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-icon"> <span className="ti-check"></span> </div>
                                <div className="list-text">
                                    <p>Convertible Cars</p>
                                </div>
                            </li>
                        </ul>
                        {/* <a href="about" className="button-1">Read More <span className="ti-arrow-top-right"></span></a> */}
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-12">
                    <div className="item"> 
                 <Image
                    src="/img/about.jpg"
                    alt=""
                    width={800}
                    height={500}
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                    />
                        {/* <img src="img/about.jpg" className="img-fluid" alt="" /> */}
                        <div className="curv-butn icon-bg">
                            <a href="https://youtu.be/1LxcTt1adfY" className="vid">
                                <div className="icon"> <i className="ti-control-play"></i> </div>
                            </a>
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};
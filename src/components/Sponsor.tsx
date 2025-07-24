"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sponsor(){

      const pathname = usePathname();
    
     useEffect(() => {
    const $ = window.$ || window.jQuery;

    if ($ && $.fn.owlCarousel) {
      const $owl = $(".clients .owl-carousel");

      // Destroy if already initialized
      if ($owl.hasClass("owl-loaded")) {
        $owl.trigger("destroy.owl.carousel");
        $owl.find(".owl-stage-outer").children().unwrap();
        $owl.removeClass("owl-loaded");
        $owl.removeClass("owl-hidden");
      }

      // Initialize carousel
      $owl.owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 500,
        dots: false,
        nav: false,
        navText: [
          "<span class='lnr ti-angle-left'></span>",
          "<span class='lnr ti-angle-right'></span>",
        ],
        responsiveClass: true,
        responsive: {
          0: {
            margin: 15,
            items: 2,
          },
          600: {
            items: 4,
          },
          1000: {
            items: 6,
          },
        },
      });
    } else {
      console.warn("jQuery or Owl Carousel plugin not loaded");
    }

    // Cleanup on unmount or route change
    return () => {
      if ($ && $.fn.owlCarousel) {
        const $owl = $(".clients .owl-carousel");
        if ($owl.hasClass("owl-loaded")) {
          $owl.trigger("destroy.owl.carousel");
          $owl.find(".owl-stage-outer").children().unwrap();
          $owl.removeClass("owl-loaded");
          $owl.removeClass("owl-hidden");
        }
      }
    };
  }, [pathname]);




    return(
        <>
            {/* <!-- Clients --> */}
    <section className="clients">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="owl-carousel owl-theme">
                        <div className="clients-logo">
                            <Image src="/img/clients/1.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/2.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/3.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/4.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/5.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/6.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/7.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                        <div className="clients-logo">
                            <Image src="/img/clients/8.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
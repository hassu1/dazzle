'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';


export default function Banner() {
 const pathname = usePathname(); // triggers effect on route change

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = window.$ || window.jQuery;

      if ($ && $.fn.select2 && $.fn.datepicker) {
        // Initialize Select2 safely
        $('.select2').each(function (this: HTMLElement) {
          const $el = $(this);
          if ($el.hasClass('select2-hidden-accessible')) {
            $el.select2('destroy');
          }

          $el.select2({
            minimumResultsForSearch: Infinity,
            width: '100%',
          });
        });

        // Initialize Datepicker safely
        $('.datepicker').each(function (this: HTMLElement) {
          const $el = $(this);
          try {
            $el.datepicker('destroy');
          } catch (err) {
            // Ignore if already destroyed or not initialized
          }

          $el.datepicker({
            orientation: 'top',
          });
        });
      } else {
        console.warn('jQuery, Select2, or Datepicker not available on window.');
      }
    }
  }, [pathname]); // Re-initialize on route change

  return (
    <section
      className="parallax-header section-padding valign bg-img bg-fixed"
      data-overlay-dark="5"
      data-background="/img/slider/2.jpg"
      style={{
        backgroundImage: `url('/img/slider/2.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Caption */}
          <div className="col-lg-6 col-md-5 mb-30 mt-30">
            <div className="v-middle2 caption">
              <h6>* Premium</h6>
              <h1>Rental Car</h1>
              <h5>You can rent any of our luxurious cars.</h5>
              <a href="#0" className="button-1 mt-15 mb-15">
                View Details <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 col-md-7">
            <div className="booking-box">
              <div className="booking-inner clearfix">
                <form method="post" action="#0" className="form1 contact__form clearfix">
                  {/* Success Message Placeholder */}
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: 'none' }}
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Car Type */}
                    <div className="col-md-12">
                      <div className="select1_wrapper">
                        <label>Choose Car Type</label>
                        <div className="select1_inner">
                          <select className="select2 select" style={{ width: '100%' }}>
                            <option value="0">Choose Car Type</option>
                            <option value="1">All</option>
                            <option value="2">Luxury Cars</option>
                            <option value="3">Sport Cars</option>
                            <option value="4">SUVs</option>
                            <option value="5">Convertible</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Pick Up Location */}
                    <div className="col-md-6">
                      <div className="select1_wrapper">
                        <label>Pick Up Location</label>
                        <div className="select1_inner">
                          <select className="select2 select" style={{ width: '100%' }}>
                            <option value="0">Pick Up Location</option>
                            <option value="1">Dubai</option>
                            <option value="2">Abu Dhabi</option>
                            <option value="3">Sharjah</option>
                            <option value="4">Alain</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Pick Up Date */}
                    <div className="col-md-6">
                      <div className="input1_wrapper">
                        <label>Pick Up Date</label>
                        <div className="input1_inner">
                          <input
                            type="text"
                            className="form-control input datepicker"
                            placeholder="Pick Up Date"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Drop Off Location */}
                    <div className="col-md-6">
                      <div className="select1_wrapper">
                        <label>Drop Off Location</label>
                        <div className="select1_inner">
                          <select className="select2 select" style={{ width: '100%' }}>
                            <option value="0">Drop Off Location</option>
                            <option value="1">Alain</option>
                            <option value="2">Sharjah</option>
                            <option value="3">Abu Dhabi</option>
                            <option value="4">Dubai</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="col-md-6">
                      <div className="input1_wrapper">
                        <label>Return Date</label>
                        <div className="input1_inner">
                          <input
                            type="text"
                            className="form-control input datepicker"
                            placeholder="Return Date"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-md-12">
                      <button type="submit" className="booking-button mt-15">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

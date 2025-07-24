'use client';

import "./Cta.css";
import Image from 'next/image';

export default function Cta() {
  return (
    <section
      className="s-subscribe s-dark-subscribe"
      style={{
        backgroundImage: "url('/img/bg-subscribe.webp')",
      }}
    >
      <span className="mask"></span>
      <span
        className="subscribe-effect"
        style={{
          backgroundImage: "url('/img/effect-subscribe-img.svg')",
        }}
      ></span>

      <div className="container">
        <div className="subscribe-left">
          <h2 className="title">
            <span>Subscribe</span>
          </h2>
          <p>
            Subscribe us and you won&apos;t miss the new arrivals, as well as
            discounts and sales.
          </p>
          <form className="subscribe-form">
            <i className="fa fa-at" aria-hidden="true"></i>
            <input
              className="inp-form"
              type="email"
              name="subscribe"
              placeholder="E-mail"
              required
            />
            <button type="submit" className="booking-button mb-15" style={{ lineHeight:'auto'}}>
              Rent Now
            </button>
          </form>
        </div>

        <Image
          className="wow fadeInRightBlur"
          src="/img/carr.webp"
          alt="Subscribe Illustration"
          width={500}
          height={400}
          loading="lazy"
          style={{ width:'100%', height:'100%' }}
        />

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import './Gallery.css';

export default function InstagramGallery() {
  return (
    <section className="s-instagram s-dark-instagram">
      <div className="instagram-cover">
        <a href="#" className="instagram-item">
          <Image
            src="/img/gallery-img1.jpg"
            alt="Gallery image 1"
            width={300}
            height={300}
            loading="lazy"
          />
        </a>
        <a href="#" className="instagram-item">
          <Image
            src="/img/gallery-img2.jpg"
            alt="Gallery image 2"
            width={300}
            height={300}
            loading="lazy"
          />
        </a>
        <a href="#" className="instagram-item">
          <Image
            src="/img/gallery-img3.jpg"
            alt="Gallery image 3"
            width={300}
            height={300}
            loading="lazy"
          />
        </a>
        <a href="#" className="instagram-item">
          <Image
            src="/img/gallery-img4.jpg"
            alt="Gallery image 4"
            width={300}
            height={300}
            loading="lazy"
          />
        </a>
        <a href="#" className="instagram-item">
          <Image
            src="/img/gallery-img5.jpg"
            alt="Gallery image 5"
            width={300}
            height={300}
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}

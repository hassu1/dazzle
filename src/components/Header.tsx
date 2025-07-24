'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link href="/" className="logo">
            <Image src="/img/dzzle.png" alt="" width={800} height={500} style={{ width: '100%', height: 'auto' }} />
          </Link>
        </div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
          
            {/* Static Pages */}
            <li className="nav-item"><Link href="/" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">ABOUT US</Link></li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                ALL VEHICLES <i className="ti-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/all-vehicles/audi" className="dropdown-item">Audi</Link></li>
                    <li><Link href="/all-vehicles/ferrari" className="dropdown-item">Ferrari</Link></li>
                    <li><Link href="/all-vehicles/lamborghini" className="dropdown-item">Lamborghini</Link></li>
                    <li><Link href="/all-vehicles/mclaren" className="dropdown-item">Mclaren</Link></li>
                    <li><Link href="/all-vehicles/mercedes" className="dropdown-item">Mercedes</Link></li>
                    <li><Link href="/all-vehicles/porsche" className="dropdown-item">Porsche</Link></li>
                    <li><Link href="/all-vehicles/range-rover" className="dropdown-item">Range Rover</Link></li>
                    <li><Link href="/all-vehicles/rolls-royce" className="dropdown-item">Rolls Royce</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link href="/our-services" className="nav-link">OUR SERVICES</Link></li>
            <li className="nav-item"><Link href="/blogs" className="nav-link">BLOGS</Link></li>


            <li className="nav-item"><Link href="/contact" className="nav-link">CONTACT US</Link></li>
          </ul>

          {/* Right Call Info */}
          <div className="navbar-right">
            <div className="wrap">
              <div className="icon"><i className="flaticon-phone-call"></i></div>
              <div className="text">
                <p>Need help?</p>
                <h5><a href="tel:+971527277464">+971527277464</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

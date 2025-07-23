'use client';

import Link from 'next/link';

export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link href="/" className="logo">
            <img src="/img/logo-light.png" className="logo-img" alt="Logo" />
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
            <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Services <i className="ti-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/services" className="dropdown-item">Services 01</Link></li>
                <li><Link href="/services2" className="dropdown-item">Services 02</Link></li>
                <li className="dropdown-submenu dropdown">
                  <Link href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                    Service Details <i className="ti-angle-right"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/service-details" className="dropdown-item">01</Link></li>
                    <li><Link href="/service-details2" className="dropdown-item">02</Link></li>
                    <li><Link href="/service-details3" className="dropdown-item">03</Link></li>
                    <li><Link href="/service-details4" className="dropdown-item">04</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Cars Dropdown */}
            <li className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Cars <i className="ti-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu dropdown">
                  <Link href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                    Car Grid <i className="ti-angle-right"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/cars" className="dropdown-item">01</Link></li>
                    <li><Link href="/cars2" className="dropdown-item">02</Link></li>
                    <li><Link href="/cars3" className="dropdown-item">03</Link></li>
                  </ul>
                </li>
                <li><Link href="/cars4" className="dropdown-item">Car Listing</Link></li>
                <li className="dropdown-submenu dropdown">
                  <Link href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                    Car Types <i className="ti-angle-right"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/car-types" className="dropdown-item">01</Link></li>
                    <li><Link href="/car-types2" className="dropdown-item">02</Link></li>
                    <li><Link href="/car-types3" className="dropdown-item">03</Link></li>
                    <li><Link href="/car-types4" className="dropdown-item">04</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropdown">
                  <Link href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                    Car Details <i className="ti-angle-right"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/car-details" className="dropdown-item">01</Link></li>
                    <li><Link href="/car-details2" className="dropdown-item">02</Link></li>
                    <li><Link href="/car-details3" className="dropdown-item">03</Link></li>
                    <li><Link href="/car-details4" className="dropdown-item">04</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages <i className="ti-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/team" className="dropdown-item">Team</Link></li>
                <li className="dropdown-submenu dropdown">
                  <Link href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                    Image Gallery <i className="ti-angle-right"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/gallery-image" className="dropdown-item">Grid</Link></li>
                    <li><Link href="/gallery-image2" className="dropdown-item">Masonry</Link></li>
                  </ul>
                </li>
                <li><Link href="/gallery-video" className="dropdown-item">Video Gallery</Link></li>
                <li><Link href="/price" className="dropdown-item">Pricing</Link></li>
                <li><Link href="/faq" className="dropdown-item">FAQ</Link></li>
                <li><Link href="/testiominals" className="dropdown-item">Testimonials</Link></li>
                <li><Link href="/team-single" className="dropdown-item">Team Single</Link></li>
                <li><Link href="/404" className="dropdown-item">404 Page</Link></li>
              </ul>
            </li>

            {/* Blog */}
            <li className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Blog <i className="ti-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/blog" className="dropdown-item">Blog Grid 01</Link></li>
                <li><Link href="/blog2" className="dropdown-item">Blog Grid 02</Link></li>
                <li><Link href="/blog3" className="dropdown-item">Blog List</Link></li>
                <li><Link href="/post" className="dropdown-item">Post Single</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>

          {/* Right Call Info */}
          <div className="navbar-right">
            <div className="wrap">
              <div className="icon"><i className="flaticon-phone-call"></i></div>
              <div className="text">
                <p>Need help?</p>
                <h5><a href="tel:8551004444">855 100 4444</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// app/all-vehicles/[brand]/page.tsx

"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";
import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const cars = [
  {
    id: 1,
    brand: "bugatti",
    name: "Bugatti Mistral W16",
    price: 800,
    image: "/img/blog/8.jpg",
    seats: 2,
    transmission: "Auto",
    minAge: 25,
  },
  {
    id: 2,
    brand: "audi",
    name: "Audi RS7 Sportback",
    price: 600,
    image: "/img/blog/6.jpg",
    seats: 4,
    transmission: "Auto",
    luggage: 2,
  },
  {
    id: 3,
    brand: "ferrari",
    name: "Bugatti Mistral W16",
    price: 900,
    image: "/img/blog/9.jpg",
    seats: 4,
    transmission: "Auto",
    luggage: 2,
  },
  {
    id: 4,
    brand: "audi",
    name: "AUDI Q8",
    price: 450,
    image: "/img/blog/10.jpg",
    seats: 4,
    transmission: "Auto",
    luggage: 3,
  },
  {
    id: 5,
    brand: "bentley",
    name: "Bentley Bentayga",
    price: 600,
    image: "/img/blog/11.jpg",
    seats: 4,
    transmission: "Auto",
    luggage: 2,
  },
  {
    id: 6,
    brand: "aston-martin",
    name: "Aston Martin DBS",
    price: 550,
    image: "/img/blog/7.jpg",
    seats: 4,
    transmission: "Auto",
    luggage: 2,
  },
];

const ITEMS_PER_PAGE = 9;

export default function BrandVehiclesPage() {
  const { brand } = useParams();  // Get brand from the dynamic route
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  // Ensure that brand is a string before calling toLowerCase
  const brandLower = Array.isArray(brand) ? brand[0].toLowerCase() : brand?.toLowerCase();

  const filteredCars = useMemo(
    () => cars.filter((car) => car.brand.toLowerCase() === brandLower),
    [brandLower]
  );

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const createPageLink = (page: number) =>
    `/all-vehicles/${brand}?page=${page}`;

  return (
    <>
      <Header />

      <section
        className="banner-header section-padding bg-img"
        style={{
          backgroundImage: `url('/img/slider/1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "130px 0px",
          height: "auto"
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
                <h6>Select Your Car</h6>
                <h1>
                  <span style={{ color: "#f0c000" }}>&quot;All Vehicles&quot;</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars3 section-padding">
        <div className="container">
          <div className="row">
            {paginatedCars.length === 0 ? (
              <p className="text-center w-100">No cars found for &quot;{brand}&quot;</p>
            ) : (
              paginatedCars.map((car) => (
                <div key={car.id} className="col-lg-4 col-md-6 mb-60">
                  <div className="item">
                    <div className="project-date">
                      <Link href="/car-details" className="br">
                        <div className="year">
                          ${car.price} <span>day</span>
                        </div>
                      </Link>
                      <div className="br-left-top">
                        <svg viewBox="0 0 11 11" className="w-11 h-11">
                          <path
                            d="M11 0L0 0V11C0 4.9 4.9 0 11 0Z"
                            fill="#1b1b1b"
                          />
                        </svg>
                      </div>
                      <div className="br-right-bottom">
                        <svg viewBox="0 0 11 11" className="w-11 h-11">
                          <path
                            d="M11 0L0 0V11C0 4.9 4.9 0 11 0Z"
                            fill="#1b1b1b"
                          />
                        </svg>
                      </div>
                    </div>
                    <Link href="/car-details" className="img">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={500}
                        height={300}
                        className="img-fluid"
                      />
                      <div className="bottom-fade"></div>
                      <div className="arrow">
                        <i className="ti-arrow-right"></i>
                      </div>
                    </Link>
                    <div className="info">
                      <div className="title">
                        <Link href="/car-details">{car.name}</Link>
                      </div>
                      <div className="details">
                        <span>
                          <i className="omfi-door"></i> {car.seats} Seats
                        </span>
                        <span>
                          <i className="omfi-transmission"></i>{" "}
                          {car.transmission}
                        </span>
                        {car.luggage && (
                          <span>
                            <i className="omfi-luggage"></i> {car.luggage} Bags
                          </span>
                        )}
                        {car.minAge && (
                          <span>
                            <i className="omfi-age"></i> Age {car.minAge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="pagination-wrap">
                  {currentPage > 1 && (
                    <li>
                      <Link href={createPageLink(currentPage - 1)}>
                        <i className="ti-angle-left"></i>
                      </Link>
                    </li>
                  )}
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <li key={page}>
                        <Link
                          href={createPageLink(page)}
                          className={page === currentPage ? "active" : ""}
                        >
                          {page}
                        </Link>
                      </li>
                    );
                  })}
                  {currentPage < totalPages && (
                    <li>
                      <Link href={createPageLink(currentPage + 1)}>
                        <i className="ti-angle-right"></i>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

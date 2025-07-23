import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "RENAX",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Styles */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body>
        {/* <!-- Preloader --> */}
        <div className="preloader-bg"></div>
        <div id="preloader">
          <div id="preloader-status">
            <div className="preloader-position loader">
              {" "}
              <span></span>{" "}
            </div>
          </div>
        </div>

        {/* <!-- Progress scroll totop --> */}
        <div className="progress-wrap cursor-pointer">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {children}

        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery-migrate-3.4.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="js/modernizr-2.6.2.min.js" strategy="afterInteractive" />
        <Script src="js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="js/jquery.isotope.v3.0.2.js" strategy="afterInteractive" />
        <Script src="js/popper.min.js" strategy="afterInteractive" />
        <Script src="js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="js/scrollIt.min.js" strategy="afterInteractive" />
        <Script src="js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="js/jquery.stellar.min.js" strategy="afterInteractive" />
        <Script src="js/jquery.magnific-popup.js" strategy="afterInteractive" />
        <Script src="js/select2.js" strategy="afterInteractive" />
        <Script src="js/datepicker.js" strategy="afterInteractive" />
        <Script src="js/YouTubePopUp.js" strategy="afterInteractive" />
        <Script src="js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

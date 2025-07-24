import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import BannerForm from '@components/components/Banner';
import AboutSection from '@components/components/AboutSection';
import OurFleet from '@components/components/OurFleet';

import Process from '@components/components/Process';
import FleetCategory from '@components/components/FleetCategory';
import Cta from '@components/components/Cta';
import Blog from '@components/components/Blog';
import Sponsor from '@components/components/Sponsor';
import CompanyLocation from '@components/components/CompanyLocation';
import InstagramGallery from '@components/components/InstagramGallery';
import { Metadata } from 'next';
import Head from 'next/head';


// Use metadata export for SEO tags
export const metadata: Metadata = {
  title: 'Dazzle Wheels | Home Page',
  description: 'Welcome to Dazzle Wheels, your premium luxury car rental service in Dubai.',
};

export default function Home() {
  return (
      <>  
      <Head>
        <link rel="canonical" href="https://dazzlewheels.ae/" />
      </Head>
   

          <Header />

          <BannerForm />
          <AboutSection />
          <OurFleet />
          <Cta />
          <FleetCategory />
          <Process />
          <Blog />
          <Sponsor />
          <CompanyLocation />
          <InstagramGallery />
          <Footer />
      </>
  );
}

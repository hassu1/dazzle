import Header from '@components/components/Header';
import Footer from '@components/components/Footer';
import AboutSection from '@components/components/AboutSection';
import Process from '@components/components/Process';
import Counter from '@components/components/Counter';
import Testimonals from '@components/components/Testimonals';


export default function About() {
    return(
            <>

                <Header />

                <div style={{ marginTop: '100px'}}>
                    <AboutSection />
                </div>
                <Process />
                <Counter />
                <Testimonals />

                <Footer />
            </>
    );
}
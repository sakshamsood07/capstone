import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Your Health, Our Priority</h1>
            <p>Comprehensive online healthcare services for everyone, anytime, anywhere.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Explore Our Services</Link>
            <Link href="/doctors">Get in Touch</Link>
            <Link href="/patients">Add pateints</Link>
            <Link href="/prescriptions">Add prescriptions</Link>

          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Our online hospital connects you with certified medical professionals through a secure and user-friendly platform. Schedule virtual consultations, access medical advice, and manage your health records—all from the comfort of your home.
          </p>
          <p>
            Whether you need a quick consultation or ongoing care, our platform is designed to make healthcare accessible and convenient for everyone.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Us?</h2>
          <p>
            We prioritize your health with our team of experienced doctors, cutting-edge technology, and a patient-centered approach. Our goal is to provide you with reliable, efficient, and compassionate care.
          </p>
          <p>
            With 24/7 availability, secure telemedicine services, and a commitment to quality, we are here to support your health journey every step of the way.
          </p>
        </section>
      </main>
    </>
  );
}

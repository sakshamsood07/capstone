import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function PatientsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Manage Patients with Ease</h1>
            <p>Efficiently track and manage patient records with our seamless healthcare system.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/patients/add">Add New Patient</Link>
            <Link href="/patients/view">View Patients</Link>
            <Link href="/doctors">Find Doctors</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Our platform allows healthcare providers to easily maintain patient records, schedule appointments, and ensure efficient communication with medical professionals.
          </p>
          <p>
            Whether you're a doctor, nurse, or healthcare administrator, our system is designed to streamline patient management and enhance healthcare delivery.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Us?</h2>
          <p>
            Our patient management system is built with advanced security measures, intuitive design, and a commitment to improving healthcare efficiency.
          </p>
          <p>
            With features like real-time updates, digital health records, and seamless integration with hospital systems, we ensure that patient care remains our top priority.
          </p>
        </section>
      </main>
    </>
  );
}

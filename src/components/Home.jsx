// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './HeaderH';

const FacebookIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
  >
      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.65 9.09 8.44 9.85v-6.98h-2.54v-2.87h2.54v-2.18c0-2.5 1.5-3.88 3.76-3.88 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.82h2.78l-.44 2.87h-2.34v6.98c4.79-.76 8.44-4.88 8.44-9.85 0-5.5-4.46-9.96-9.96-9.96z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
  >
      <path d="M12 2.16c3.24 0 3.64 0 4.91.07 1.2.06 1.88.25 2.33.42.56.22.96.48 1.39.91.43.43.69.83.91 1.39.17.45.36 1.13.42 2.33.07 1.27.07 1.67.07 4.91s0 3.64-.07 4.91c-.06 1.2-.25 1.88-.42 2.33-.22.56-.48.96-.91 1.39-.43.43-.83.69-1.39.91-.45.17-1.13.36-2.33.42-1.27.07-1.67.07-4.91.07s-3.64 0-4.91-.07c-1.2-.06-1.88-.25-2.33-.42-.56-.22-.96-.48-1.39-.91-.43-.43-.69-.83-.91-1.39-.17-.45-.36-1.13-.42-2.33-.07-1.27-.07-1.67-.07-4.91s0-3.64.07-4.91c.06-1.2.25-1.88.42-2.33.22-.56.48-.96.91-1.39.43-.43.83-.69 1.39-.91.45-.17 1.13-.36 2.33-.42 1.27-.07 1.67-.07 4.91-.07m0-2.16c-3.33 0-3.74 0-5.03.07-1.35.06-2.27.27-3.08.58-.85.32-1.56.76-2.27 1.47-.71.71-1.15 1.42-1.47 2.27-.31.81-.52 1.73-.58 3.08-.07 1.29-.07 1.7-.07 5.03s0 3.74.07 5.03c.06 1.35.27 2.27.58 3.08.32.85.76 1.56 1.47 2.27.71.71 1.42 1.15 2.27 1.47.81.31 1.73.52 3.08.58 1.29.07 1.7.07 5.03.07s3.74 0 5.03-.07c1.35-.06 2.27-.27 3.08-.58.85-.32 1.56-.76 2.27-1.47.71-.71 1.15-1.42 1.47-2.27.31-.81.52-1.73.58-3.08.07-1.29.07-1.7.07-5.03s0-3.74-.07-5.03c-.06-1.35-.27-2.27-.58-3.08-.32-.85-.76-1.56-1.47-2.27-.71-.71-1.42-1.15-2.27-1.47-.81-.31-1.73-.52-3.08-.58-1.29-.07-1.7-.07-5.03-.07z"/>
      <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-11.2c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44 1.44.64 1.44 1.44-.64 1.44-1.44 1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
  >
      <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775 4.938 4.938 0 0 0 2.165-2.723 9.873 9.873 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.384 4.49A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.215 2.188 4.096a4.904 4.904 0 0 1-2.231-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419 9.874 9.874 0 0 1-6.115 2.106c-.398 0-.79-.023-1.175-.068a13.952 13.952 0 0 0 7.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
  >
      <path d="M19.615 3.184c-2.615-.253-8.615-.253-8.615-.253s-6 .001-8.615.253c-2.841.273-4.385 1.85-4.385 4.615v8.402c0 2.77 1.544 4.347 4.385 4.615 2.615.253 8.615.253 8.615.253s6-.001 8.615-.253c2.841-.273 4.385-1.85 4.385-4.615v-8.402c0-2.77-1.544-4.347-4.385-4.615zm-11.615 12.615v-8l8 4-8 4z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
  >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.25 19h-2.5v-10h2.5v10zm-1.25-11.289c-.82 0-1.48-.671-1.48-1.498 0-.827.66-1.497 1.48-1.497s1.48.67 1.48 1.497c0 .827-.66 1.498-1.48 1.498zm11.25 11.289h-2.5v-5.385c0-1.284-.025-2.938-1.793-2.938-1.794 0-2.067 1.402-2.067 2.849v5.474h-2.5v-10h2.403v1.363h.034c.334-.635 1.151-1.3 2.371-1.3 2.537 0 3.007 1.67 3.007 3.839v6.098z"/>
  </svg>
);

const Home = () => {
  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipPZKHcR-8Q5zANNs2lPWZRBqANmJ7TOm9_OVq8t=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMwNaEU06VdMqNaY-7o1Lzn4p2jpWdkSuyRTF3T=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOC-C4XsKMfKUYXwDIEADiB2CUPRZoSUmOiLFFG=s680-w680-h510",
    "https://i.postimg.cc/15h9JYts/immagine4.jpg",
    "https://i.postimg.cc/rmD8YBxF/immagine5.jpg"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Why Choose Sandhya Nursing Home & Diagnostic Centre?
  const stats = [
    {
      icon: 'https://i.postimg.cc/y8TYJX7B/immagine1.jpg', // replace with actual icon URL
      number: '73+',
      description: 'Largest private healthcare network of Hospitals'
    },
    {
      icon: 'https://i.postimg.cc/kMhJKgr6/immagine2.jpg', // replace with actual icon URL
      number: '400+',
      description: 'Largest private network of clinics across India'
    },
    {
      icon: 'https://i.postimg.cc/WbF2ncj9/immagine3.jpg', // replace with actual icon URL
      number: '1,100+',
      description: 'Diagnostic centres across India'
    },
    {
      icon: 'https://i.postimg.cc/15h9JYts/immagine4.jpg', // replace with actual icon URL
      number: '5,000+',
      description: 'Pharmacies'
    },
    {
      icon: 'https://i.postimg.cc/rmD8YBxF/immagine5.jpg', // replace with actual icon URL
      number: '10,000+',
      description: 'Pin codes Served across India'
    },
    {
      icon: 'https://i.postimg.cc/y8TYJX7B/immagine1.jpg', // replace with actual icon URL
      number: '11,000+',
      description: 'Doctors'
    }
  ];

  // What's new at Sandhya Nursing Home & Diagnostic Centre
  const newsItems = [
    {
      date: '14 May 24',
      title: 'Apollo Hospitals in Indore Introduces Central India’s First CORI Hip...',
      description: 'Taking care delivery to the next level in Central India, Apollo Hospitals, Indore...',
      imgSrc: 'https://i.postimg.cc/y8TYJX7B/immagine1.jpg', // Replace with actual image URL
      link: '/blog/indore-introduces-cori-hip'
    },
    {
      date: '25 Apr 24',
      title: 'Apollo Hospitals Group becomes the largest hospital network to have the...',
      description: 'National, 25th April, 2024: Apollo Hospitals Group announced its seventh consec...',
      imgSrc: 'https://i.postimg.cc/kMhJKgr6/immagine2.jpg', // Replace with actual image URL
      link: '/blog/largest-hospital-network'
    },
    {
      date: '14 May 24',
      title: 'Apollo Hospitals, Chennai has launched the Fatty Liver Clinic at the Liver...',
      description: 'Fatty liver disease is rapidly becoming a major health concern in India. Studies...',
      imgSrc: 'https://i.postimg.cc/WbF2ncj9/immagine3.jpg', // Replace with actual image URL
      link: '/blog/fatty-liver-clinic'
    },
    {
      date: '10 - 12 May 24',
      title: '4th Apollo Annual Proton Practicum',
      description: 'Improving Survival and Survivorship in Paediatric and CNS Tumours with Proton...',
      imgSrc: 'https://i.postimg.cc/15h9JYts/immagine4.jpg', // Replace with actual image URL
      link: '/blog/proton-practicum'
    }
  ];

  // DISCLAIMER
  const disclaimers = [
    {
      title: 'Transplant Disclaimer',
      description: 'It has been brought to our notice that some people have received emails purporting to offer money for kidney donation and misusing the name of Apollo Hospitals. The...',
      imgSrc: 'https://i.postimg.cc/QM7qktR0/immagine1.jpg', // Replace with actual image URL
      link: '/disclaimer/transplant'
    },
    {
      title: 'Recruitment Disclaimer',
      description: 'Apollo Hospitals Enterprise Limited brings to your attention that persons not authorized by the Company are circulating/posting fake advertisements inviting...',
      imgSrc: 'https://i.postimg.cc/L8Fxd2kx/immagine2.jpg', // Replace with actual image URL
      link: '/disclaimer/recruitment'
    }
  ];

  return (
    <>
    {/* Header Section */}
    <Header />
    {/* Hero Section */}
    <div className="hero-container">
      <Link to="/book-appointment" className="hero-button">BOOK APPOINTMENT</Link>
      <Link to="/book-health-check" className="hero-button">BOOK HEALTH CHECK</Link>
      <Link to="/book-lab-test" className="hero-button">BOOK LAB TEST</Link>
      <Link to="/contact-us" className="hero-button">CONTACT US</Link>
    {/* <a href="#" className="hero-button">BUY MEDICINE</a> */}
  </div>
  {/* Slider */}
  <div id="slider">
      <button onClick={prevSlide}>{"<"}</button>
      <div id="img_slider">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            style={{ display: index === currentIndex ? 'block' : 'none' }} 
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={nextSlide}>{">"}</button>
    </div>

  {/* Why Choose Sandhya Nursing Home & Diagnostic Centre? */}
  <div className="why-choose-us">
      <h2>Why Choose Sandhya Nursing Home & Diagnostic Centre?</h2>
      <p>
        Established by Dr Prathap C Reddy in 1983, Sandhya Nursing Home & Diagnostic Centre has a robust presence across the healthcare ecosystem.
        From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services,
        Apollo Hospitals has touched more than 200 million lives from over 120 countries.
      </p>
      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <img src={stat.icon} alt="icon" />
            <h3>{stat.number}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* What's new at Sandhya Nursing Home & Diagnostic Centre */}
    <div className="whats-new">
      <h2>What's new at Sandhya Nursing Home & Diagnostic Centre</h2>
      <div className="news-cards">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.imgSrc} alt={item.title} />
            <div className="news-content">
              <p className="date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
      <a href="/blog" className="view-all">View All →</a>
    </div>

    {/* Disclaimer */}
    <div className="disclaimer">
      <h2>DISCLAIMER</h2>
      <div className="disclaimer-cards">
        {disclaimers.map((item, index) => (
          <div key={index} className="disclaimer-card">
            <img src={item.imgSrc} alt={item.title} />
            <div className="disclaimer-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer>
        <div className="footer1">
            <div className="footer-sections">
                <div className="footer-column">
                    <h3>Patient Care</h3>
                    <button>Find A Doctor</button>
                    <button>Medical Services</button>
                    <button>Patient Testimonials</button>
                    <button>Value Added Services</button>
                    <button>Pay Online</button>
                    <button>Apollo Surgery</button>
                </div>
                <div className="footer-column">
                    <h3>International Patients</h3>
                    <button>About Apollo</button>
                    <button>Hospitals</button>
                </div>
                <div className="footer-column">
                    <h3>News & Media</h3>
                    <button>News</button>
                    <button>Events</button>
                    <button>Interviews</button>
                    <button>Watch Our Videos</button>
                    <button>Media Contacts</button>
                    <button>Apollo Hospitals Reviews</button>
                </div>
                <div className="footer-column">
                    <h3>Centres Of Excellence</h3>
                    <button>Orthopaedics</button>
                    <button>Nephrology & Urology</button>
                    <button>Bariatric Surgery</button>
                    <button>Cardiology</button>
                    <button>Pulmonology</button>
                    <button>Gastroenterology</button>
                    <button>Spine Surgery</button>
                    <button>Oncology</button>
                    <button>Neurology & Neurosurgery</button>
                    <button>Organ Transplantation</button>
                    <button>Robotic Surgery</button>
                    <button>Preventive Health Check Up</button>
                    <button>Apollo ProHealth</button>
                    <button>Emergency Care</button>
                    <button>Ear, Nose And Throat</button>
                    <button>Vascular Surgery</button>
                    <button>Pediatrics</button>
                    <button>Dermatology</button>
                    <button>Obstetrics And Gynaecology</button>
                </div>
                <div className="footer-column">
                    <h3>Medical Procedures</h3>
                    <button>Proton Therapy For Cancer Treatment</button>
                    <button>Cosmetic And Plastic Surgery</button>
                    <button>Bone Marrow Transplant</button>
                    <button>Oral & Maxillofacial Surgery</button>
                    <button>Hand MicroSurgery</button>
                    <button>G Scan – Open Standing MRI Scan</button>
                    <button>Hip Arthroscopy</button>
                    <button>Minimally Invasive Cardiac Surgery</button>
                    <button>Knee Replacement Surgery</button>
                    <button>Cochlear Implant Surgery</button>
                </div>
                <div className="footer-column">
                    <h3>Blogs</h3>
                    <button>Health Library</button>
                    <button>Covid 19 Updates</button>
                    <button>Covid 19 FAQS</button>
                    <button>COVID-19 Vaccination</button>
                    <button>COVID-19 New Symptoms</button>
                </div>
                <div className="footer-column">
                    <h3>Corporate</h3>
                    <button>Company Overview</button>
                    <button>Our Doctors Achieve</button>
                    <button>The Apollo Ethos</button>
                    <button>The Apollo Story</button>
                    <button>Management</button>
                    <button>Investor Relations</button>
                    <button>Investor Presentation</button>
                    <button>Initiatives</button>
                    <button>Awards & Accolades</button>
                    <button>Careers</button>
                </div>
                <div className="footer-column">
                    <h3>Hospitals</h3>
                    <button>Hospitals In India</button>
                    <button>International Hospitals</button>
                    <button>Apollo Clinics</button>
                    <button>Reach Hospitals</button>
                    <button>Apollo Cradle</button>
                    <button>Apollo Fertility</button>
                    <button>Apollo Cancer Centers</button>
                    <button>Apollo Proton Centers</button>
                </div>
            </div>
            <div className="logo">
                <img src="/Images/LOGO.png" alt="Apollo Hospitals Logo" />
                <form className="connect-form">
                    <h3>LET'S CONNECT</h3>
                    <input className="fillbox" type="email" placeholder="Your Email" required />
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
        <div className="footer2">
            <p>© Copyright 2024. Sandhya Nursing Home & Diagnostic Centre. All Rights Reserved.</p>
            <div className="social-media">
                <a href="https://www.facebook.com/p/Sandhya-Nursing-Home-Diagnostic-Center-100065299329176/"><FacebookIcon /></a>
                <a href="https://www.instagram.com"><InstagramIcon /></a>
                <a href="https://www.twitter.com"><TwitterIcon /></a>
                <a href="https://www.youtube.com"><YouTubeIcon /></a>
                <a href="https://www.linkedin.com"><LinkedInIcon /></a>
            </div>
            <div className="policy-links">
                <a href="privacy-policy.html">Privacy policy </a>
                <p>&#10072;</p>
                <a href="disclaimer.html">Disclaimer</a>
            </div>
        </div>
    </footer>
  </>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import profileImg from "./assets/pfp.jpeg";
import wpLogo from "./assets/WPLogo.png";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navRef = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);





  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(update, 50);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  }, []);

  useEffect(() => {
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }, []);



  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">RS</div>

          <nav ref={navRef} className={menuOpen ? "nav open" : "nav"}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#events">Events</a>
            <a href="#contact" className="nav-btn">Book</a>
          </nav>

          <div ref={hamburgerRef} className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>

        </div>
      </header>
      <section className="video-hero">
        <video
          className="hero-video"
          src={require("./assets/Cover.MP4")}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero-overlay">
          <h1>Bringing Energy To Every Event</h1>
          <p>Professional Emcee • Luxury Events • Corporate Shows • Weddings</p>
          <a href="#contact" className="btn-gold">Book Now</a>
        </div>
      </section>

      {/* HERO INTRO */}
      <section className="hero-intro" id="about" data-aos="fade-up">
        <div className="hero-left">
          <h1>Meet Your Anchor</h1>
          <h3> Anchoring is not just a profession for Rani — it’s a passion. She ensures
            every event flows smoothly while keeping audiences engaged and energized.</h3>
          <p className="hero-stats">
            <span><strong className="counter" data-target="1500">0</strong>+ Shows</span>
            <span><strong className="counter" data-target="7">0</strong>+ Years Experience</span>
          </p>

          <a href="#contact" className="btn-gold sparkle">Book Now</a>

        </div>
        <div className="hero-right">
          <img src={profileImg} alt="Rani Sahu" />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience" data-aos="fade-up">
        <h2>Event Experience</h2>
        <div className="grid">
          {["Corporate Events", "Award Shows", "Wedding Receptions", "Product Launches", "Cultural Events", "Government Functions"].map((item, i) => (
            <div key={i} className="card">{item}</div>
          ))}
        </div>
      </section>

      {/* HOSTING STYLE */}
      <section className="section" id="style" data-aos="fade-up">
        <h2>Hosting Style</h2>
        <p>
          Elegant, confident and energetic. Rani blends professionalism with warmth,
          ensuring every event feels premium yet personal.
        </p>
      </section>

      {/* STRENGTHS */}
      <section className="section" id="strengths" data-aos="fade-up">
        <h2>Strengths</h2>
        <div className="grid">
          {["Strong Stage Presence", "Audience Engagement", "Clear Communication", "Adaptability", "High Energy Delivery", "Professional Demeanor"].map((item, i) => (
            <div key={i} className="card">{item}</div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements" id="achievements" data-aos="fade-up">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {[
            "Best Emcee – Chhattisgarh",
            "Best Emcee – Madhya Pradesh",
            "Best Emcee – Rajasthan",
            "Best Emcee – Maharashtra",
            "Best Emcee – Goa"
          ].map((item, i) => (
            <div key={i} className="achievement-card">
              <div className="achievement-inner sparkle">{item}</div>

            </div>
          ))}
        </div>
      </section>


      {/* GALLERY */}
      <section className="section" id="events" data-aos="fade-up">
        <h2>Event Highlights</h2>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
        >
          {[
            require("./assets/Gallery1.JPEG"),
            require("./assets/Gallery2.JPEG"),
            require("./assets/Gallery3.JPEG"),
            require("./assets/Gallery4.JPEG"),
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="event-img-wrap">
                <img src={img} alt="Event highlight" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* BRANDS */}
      <section className="section" id="brands" data-aos="fade-up">
        <h2>Brands I've Worked With</h2>
        <Swiper modules={[Autoplay]} loop autoplay={{ delay: 2000 }} breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}>
          <SwiperSlide><img src={require("./assets/airtel.jpg")} className="brand-logo" alt="" /></SwiperSlide>
          <SwiperSlide><img src={require("./assets/Adani.png")} className="brand-logo" alt="" /></SwiperSlide>
          <SwiperSlide><img src={require("./assets/Naykaa.png")} className="brand-logo" alt="" /></SwiperSlide>
          <SwiperSlide><img src={require("./assets/Royal.png")} className="brand-logo" alt="" /></SwiperSlide>
        </Swiper>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials" id="testimonials" data-aos="fade-up">
        <h2>What Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card"><p>"A flawless host with unmatched grace."</p><h4>— Corporate Director</h4></div>
          <div className="testimonial-card"><p>"She elevated our wedding reception beautifully."</p><h4>— Wedding Planner</h4></div>
          <div className="testimonial-card"><p>"Professional, engaging and classy."</p><h4>— Brand Manager</h4></div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact" data-aos="fade-up">
        <h2>Bookings & Inquiries</h2>
        <p>Email: ranisahu80795@gmail.com</p>
        <p>Instagram: @anchor.rani</p>
        <a href="mailto:ranisahu80795@gmail.com" className="btn-gold">Send Inquiry</a>
      </section>

      <a
        href="https://wa.me/919999999999"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wpLogo} alt="WhatsApp" width={60} height={40} />
      </a>

      <footer className="footer">© {new Date().getFullYear()} Rani Sahu • Professional Emcee</footer>
    </div>
  );
}

export default App;

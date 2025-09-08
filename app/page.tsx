"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const heroImages = ["/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg"];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevImage();
    else if (delta < -50) nextImage();
    touchStartX.current = null;
  };

  const prevImage = () =>
    setCurrent((current - 1 + heroImages.length) % heroImages.length);
  const nextImage = () => setCurrent((current + 1) % heroImages.length);

  return (
    <main>
      {/* Nav Bar */}
      <nav className="navbar">
        <Image
          src="/IT Box-logo.png"
          alt="ITBox Logo"
          width={300}
          height={100}
          style={{
            verticalAlign: "middle",
            display: "inline-block",
            height: "100px",
            width: "auto",
          }}
        />
        <div className="nav-links">
          <a href="#">Paketi</a>
          <a href="#">O projektu IT Box</a>
          <a href="#">FAQ</a>
          <a href="#">Kontakt</a>
        </div>
        <style>{`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background: transparent;
            color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            z-index: 100;
          }
          .navbar-brand {
            font-weight: bold;
            font-size: 1.5rem;
          }
          .nav-links {
            display: none;
            gap: 2rem;
          }
          .nav-links a {
            color: #fff;
            text-decoration: none;
            margin-left: 2rem;
            transition: color 0.4s, background 0.4s;
            padding: 0.5rem 1.2rem;
            border-radius: 0.7rem;
            display: inline-block;
          }
          .nav-links a:hover {
            color: #fff;
            background: #e53935;
            cursor: pointer;
            text-shadow: none;
          }
          .nav-hamburger {
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: block;
    transition: box-shadow 0.2s;
  }
    .nav-hamburger.pulse {
    animation: pulse 0.4s;
  }
    @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 #e53935; }
    50% { transform: scale(1.2); box-shadow: 0 0 12px 4px #e53935; }
    100% { transform: scale(1); box-shadow: 0 0 0 0 #e53935; }
  }
          .nav-dropdown {
            position: absolute;
            top: 100%;
            right: 2rem;
            background: rgba(34,34,34,0.95);
            border-radius: 0.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            transition: opacity 0.3s ease;
            z-index: 10;
            opacity: 0;
            pointer-events: none;
          }
          .nav-dropdown.open {
            display: flex;
            opacity: 1;
            pointer-events: auto;
          }
          .nav-dropdown a {
            color: #fff;
            text-decoration: none;
            margin-left: 2rem;
            transition: color 0.2s, background 0.2s;
            padding: 0.5rem 1.2rem;
            border-radius: 0.7rem;
            display: inline-block;
          }
          .nav-dropdown a:hover {
            color: #fff;
            background: #e53935;
            cursor: pointer;
            text-shadow: none;
          }
          @media (min-width: 768px) {
            .nav-links {
              display: flex !important;
            }
            .nav-hamburger {
              display: none !important;
            }
            .nav-dropdown {
              display: none !important;
            }
          }
        `}</style>
      </nav>

      {/* Hero Banner */}
      <section
        className="hero-section"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-image-wrapper">
          <Image
            src={heroImages[current]}
            alt={`Hero ${current + 1}`}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 8s cubic-bezier(.4,0,.2,1)",
              transform: "scale(1.08)",
            }}
            className="hero-image"
            priority
          />
          <style>{`
            .hero-image-wrapper {
  position: relative;
  width: 100vw;
  aspect-ratio: 16 / 9;
  height: auto;         /* fallback */
  max-height: 85vh;
  overflow: hidden;
}


          `}</style>
          {/* Arrows for desktop */}
          <button
            className="hero-arrow left"
            onClick={prevImage}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            className="hero-arrow right"
            onClick={nextImage}
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
        <style>{`
          .hero-section {
            position: relative;
            min-height: 40vh;
            height: 85vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #111;
            user-select: none;
          }
          .hero-image-wrapper {
            position: relative;
            width: 100vw;
            height: 100%;
          }
          .hero-image {
            animation: heroZoom 8s linear infinite;
          }
          @keyframes heroZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
          .hero-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(34,34,34,0.6);
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            font-size: 2rem;
            cursor: pointer;
            z-index: 2;
            opacity: 0.8;
            transition: background 0.2s;
          }
          .hero-arrow.left { left: 24px; }
          .hero-arrow.right { right: 24px; }
          .hero-arrow:hover {
            background: #e53935;
            opacity: 1;
          }
          @media (max-width: 767px) {
            .hero-section {
              min-height: 25vh;
              height: 85vh;
            }
            .hero-arrow {
              width: 36px;
              height: 36px;
              font-size: 1.5rem;
            }
          }
        `}</style>
      </section>

      {/* welcome */}
      <section className="filler-section">
        <div className="filler-content">
          <h2>Dobrodošli u IT Box, mi smo Vaš IT partner!</h2>
        </div>
        <style>{`
          .filler-section {
    width: 100%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 8rem;
    padding: 2rem 0;
  }
  .filler-content h2 {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6347, #ff6347, #ff6347, #ff6347, #ff6347);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 2.8rem;
  opacity: 0;
  transform: translateY(60px);
  animation: slideUpFade 1.2s cubic-bezier(.4,0,.2,1) forwards;
  animation-delay: 0.2s;
}
@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(60px);
    filter: brightness(0.7);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
    filter: brightness(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: brightness(1);
  }
}
  @media (max-width: 900px) {
    .filler-content h2 {
      font-size: 2.2rem;
      padding: 1.5rem 0.5rem;
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    .filler-content h2 {
      font-size: 1.3rem;
      padding: 1rem 0.2rem;
    }
    .filler-section {
      padding: 1rem 0;
      min-height: 5rem;
    }
  }
        `}</style>
      </section>

      {/* Packages Section */}
      <section id="packages" className="cards-section packages-section">
        <div className="card package-card" style={{ background: "#ff6347" }}>
          <h2>Starter Package</h2>
          <p>Basic data solutions for small businesses.</p>
        </div>
        <div className="card package-card" style={{ background: "#ff6347" }}>
          <h2>Professional Package</h2>
          <p>Advanced data analytics for growing companies.</p>
        </div>
        <div className="card package-card" style={{ background: "#ff6347" }}>
          <h2>Enterprise Package</h2>
          <p>Comprehensive data management for large organizations.</p>
        </div>
        <style>{`
          .packages-section {
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            gap: 0;
            min-height: 35vh;
            height: 35vh;
            background: #f5f5f5;
          }
          .package-card {
            flex: 1 1 0;
            margin: 0;
            border-radius: 0;
            min-width: 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            height: 100%;
            transition: transform 0.3s;
          }
          .package-card:hover {
            transform: translateY(-15px);
          }
          .package-card button {
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            background: #222;
            color: #fff;
            cursor: pointer;
          }
          @media (max-width: 900px) {
            .packages-section {
              flex-direction: column;
              gap: 1.5rem;
              min-height: 60vh;
              height: auto;
              padding: 2rem 0;
            }
            .package-card {
              border-radius: 1rem;
              margin-bottom: 0;
              width: 95vw;
              max-width: 400px;
              align-self: center;
              min-height: 18vh;
              height: auto;
            }
          }
        `}</style>
      </section>

      {/* Why us section */}
      <section id="whyus" className="cards-section whyus-section">
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Expert Team</h2>
          <p>
            Our professionals have years of experience in IT and data solutions.
          </p>
        </div>
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Custom Solutions</h2>
          <p>We tailor our packages to fit your business needs.</p>
        </div>
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Support & Security</h2>
          <p>
            Reliable support and robust data protection for your peace of mind.
          </p>
        </div>
        <style>{`
          .whyus-section {
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            gap: 0;
            min-height: 35vh;
            height: 35vh;
            background: #f5f5f5;
          }
          .whyus-card {
            flex: 1 1 0;
            margin: 0;
            border-radius: 0;
            min-width: 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            height: 100%;
            transition: transform 0.3s;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .whyus-card:hover {
            transform: translateY(-15px);
          }
          .whyus-card button {
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            background: #222;
            color: #fff;
            cursor: pointer;
          }
          @media (max-width: 900px) {
            .whyus-section {
              flex-direction: column;
              gap: 1.5rem;
              min-height: 60vh;
              height: auto;
              padding: 2rem 0;
            }
            .whyus-card {
              border-radius: 1rem;
              margin-bottom: 0;
              width: 95vw;
              max-width: 400px;
              align-self: center;
              min-height: 18vh;
              height: auto;
            }
              .package-card, .whyus-card {
      opacity: 0;
      transform: translateY(60px);
      animation: slideUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
    }
    .package-card:nth-child(1), .whyus-card:nth-child(1) {
      animation-delay: 0.1s;
    }
    .package-card:nth-child(2), .whyus-card:nth-child(2) {
      animation-delay: 0.3s;
    }
    .package-card:nth-child(3), .whyus-card:nth-child(3) {
      animation-delay: 0.5s;
    }
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
              .package-card, .whyus-card {
    transition: transform 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s;
  }
  .package-card:hover, .package-card:active,
  .whyus-card:hover, .whyus-card:active {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(0,0,0,0.18);
    z-index: 2;
  }
    
        `}</style>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="filler-content">
          <h2>Imate pitanja? Kontaktirajte nas!</h2>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
        <style>{`
       .btn {
          transition: background 0.3s, transform 0.2s;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          background: #e53935;
          color: #fff;
          cursor: pointer;
          color: #fff;
          font-weight: bold;
      }
      .btn:hover {
        background: #e53935;
        transform: scale(1.05);
      }
      .btn:active {
        transform: scale(0.95);
      }
          .contact-section {
            min-height: 25vh;
            padding: 3rem 2rem;
            background: #f5f5f5;
            color: #222;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            color: #222;
          }
          .contact-form input,
          .contact-form textarea {
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: none;
            width: 300px;
            max-width: 90vw;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .contact-form textarea {
            height: 250px;
            resize: vertical;
            font-family: inherit;
            font-size: 1rem;
            max-height: 250px; 
            min-height: 250px;
          }
                .contact-form button {
                  padding: 0.5rem 1.5rem;
                  border-radius: 0.5rem;
                  border: none;
                  background: #e53935;
                  color: #fff;
                  cursor: pointer;
                }
              `}</style>
      </section>
    </main>
  );
}

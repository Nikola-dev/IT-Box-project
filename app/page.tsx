"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = ["/hero1.png", "/hero2.jpeg", "/hero3.jpeg"];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (activePackage) {
      setShowOverlay(true);
    } else {
      // Wait for transition to finish before unmounting
      const timeout = setTimeout(() => setShowOverlay(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [activePackage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000); // 7 sec

    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  const prevImage = () => {
    setDirection("left");
    setCurrent((current - 1 + heroImages.length) % heroImages.length);
  };
  const nextImage = () => {
    setDirection("right");
    setCurrent((current + 1) % heroImages.length);
  };

  return (
    <main>
      {/* Nav Bar */}
      <nav className="navbar">
        <Image
          src="/itbl2.png"
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
          <a href="/paketi">Paketi</a>
          <a href="/projekat">O projektu IT Box</a>
          <a href="/faq">FAQ</a>
          <a href="/kontakt">Kontakt</a>
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
      .navbar a:hover {
        text-decoration: underline;
        color: #ff6347;
        
      }
      .navbar img{
      margin-left: -2rem;
      margin-top: -2rem;
      }
    .nav-links {
      display: none;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .nav-links {
        display: flex !important;
      }
    }
  `}</style>
      </nav>
      {/* Hamburger icon overlay for mobile */}
      <button
        className="nav-hamburger-overlay"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect y="7" width="32" height="3" rx="1.5" fill="#fff" />
          <rect y="15" width="32" height="3" rx="1.5" fill="#fff" />
          <rect y="23" width="32" height="3" rx="1.5" fill="#fff" />
        </svg>
      </button>
      {/* Mobile nav menu overlay */}
      <div
        className={`nav-dropdown-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <a href="/paketi" onClick={() => setMenuOpen(false)}>
          Paketi
        </a>
        <a href="/projekat" onClick={() => setMenuOpen(false)}>
          O projektu IT Box
        </a>
        <a href="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </a>
        <a href="/kontakt" onClick={() => setMenuOpen(false)}>
          Kontakt
        </a>
      </div>
      <style>{`
  .nav-hamburger-overlay {
    position: fixed;
    top: 24px;
    right: 24px;
    background: none;
    border: none;
    z-index: 200;
    display: none;
  }
  @media (max-width: 767px) {
    .nav-hamburger-overlay {
      display: block;
    }
    .navbar .nav-links {
      display: none !important;
    }
  }
  .nav-dropdown-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(34,34,34,0.97);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 199;
  }
  .nav-dropdown-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }
  .nav-dropdown-overlay a {
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    transition: background 0.2s;
  }
  .nav-dropdown-overlay a:hover {
    background: #e53935;
    color: #fff;
  }
`}</style>
      {/* Hero Banner */}
      <section
        className="hero-section"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-image-wrapper">
          <div className="hero-image-carousel">
            {heroImages.map((src, idx) => {
              // Only render current and previous image for transition
              if (
                idx === current ||
                idx ===
                  (direction === "left"
                    ? (current + 1) % heroImages.length
                    : direction === "right"
                    ? (current - 1 + heroImages.length) % heroImages.length
                    : -1)
              ) {
                return (
                  <Image
                    key={src}
                    src={src}
                    alt={`Hero ${idx + 1}`}
                    fill
                    className={`hero-image ${
                      idx === current
                        ? direction === "left"
                          ? "slide-in-left"
                          : direction === "right"
                          ? "slide-in-right"
                          : "active"
                        : direction === "left"
                        ? "slide-out-right"
                        : direction === "right"
                        ? "slide-out-left"
                        : ""
                    }`}
                    style={{
                      objectFit: "cover",
                      zIndex: idx === current ? 2 : 1,
                      pointerEvents: idx === current ? "auto" : "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    priority={idx === current}
                  />
                );
              }
              return null;
            })}
          </div>
          <style>{`
  .hero-image-carousel {
   position: relative;
    width: 100vw;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    height: auto;
  }
  .hero-image {
    transition: opacity 0.6s, transform 0.6s, left 0.6s;
    will-change: transform, opacity, left;
    opacity: 1;
  }
  .hero-image.slide-in-left {
    animation: slideInLeft 0.6s cubic-bezier(.4,0,.2,1);
    z-index: 2;
  }
  .hero-image.slide-in-right {
    animation: slideInRight 0.6s cubic-bezier(.4,0,.2,1);
    z-index: 2;
  }
  .hero-image.slide-out-left {
    animation: slideOutLeft 0.6s cubic-bezier(.4,0,.2,1);
    z-index: 1;
  }
  .hero-image.slide-out-right {
    animation: slideOutRight 0.6s cubic-bezier(.4,0,.2,1);
    z-index: 1;
  }
  @keyframes slideInLeft {
    from { left: -100vw; opacity: 0; }
    to { left: 0; opacity: 1; }
  }
  @keyframes slideInRight {
    from { left: 100vw; opacity: 0; }
    to { left: 0; opacity: 1; }
  }
  @keyframes slideOutLeft {
    from { left: 0; opacity: 1; }
    to { left: -100vw; opacity: 0; }
  }
  @keyframes slideOutRight {
    from { left: 0; opacity: 1; }
    to { left: 100vw; opacity: 0; }
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
    aspect-ratio: 16 / 9;
    overflow: hidden;
    height: auto;
  @keyframes heroZoom {
    from { transform: scale(1); }
    to { transform: scale(1.08); }
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
              height: auto;
            }
            .hero-arrow {
              display: none !important;
            }
              .hero-image-wrapper,
    .hero-image-carousel {
      aspect-ratio: 16 / 9;
      max-height: 40vh;
      height: auto;
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
        <div
          className="card package-card"
          style={{ background: "#ff6347" }}
          onClick={() => setActivePackage("starter")}
        >
          <h2>Starter Paket</h2>
          <p>Osnovna rešenja za mala preduzeća.</p>
          <img
            src="/starter.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
        </div>
        <div
          className="card package-card"
          style={{ background: "#ff6347" }}
          onClick={() => setActivePackage("professional")}
        >
          <h2>Profesionalni Paket</h2>
          <p>Napredna analitika podataka za rastuće kompanije.</p>
          <img
            src="/professional.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
        </div>
        <div
          className="card package-card"
          style={{ background: "#ff6347" }}
          onClick={() => setActivePackage("enterprise")}
        >
          <h2>Enterprise Paket</h2>
          <p>Obuhvatno upravljanje podacima za velike organizacije.</p>
          <img
            src="/enterprise.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
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
            .card package-card{
              opacity: 0;
              transform: translateY(60px);
              animation: slideUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
              }
            .package-card:nth-child(1) {
              animation-delay: 0.1s;
            }
            .package-card:nth-child(2) {
              animation-delay: 0.3s;
            }
            .package-card:nth-child(3) {
              animation-delay: 0.5s;
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
              .card package-card{
              opacity: 0;
              transform: translateY(60px);
              animation: slideUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
              }
            .package-card:nth-child(1) {
              animation-delay: 0.1s;
            }
            .package-card:nth-child(2) {
              animation-delay: 0.3s;
            }
            .package-card:nth-child(3) {
              animation-delay: 0.5s;
            } 
          }
        `}</style>
      </section>

      {showOverlay && (
        <div
          className={`package-overlay${activePackage ? " open" : ""}`}
          onClick={() => setActivePackage(null)}
        >
          {activePackage && (
            <div
              className="package-overlay-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setActivePackage(null)}
              >
                ×
              </button>
              {activePackage === "starter" && (
                <>
                  <h2>🚀Starter Paket</h2>
                  <div>
                    <p>
                      Tvoj prvi korak ka online svetu!
                      <br />
                      Ako ti treba jednostavan i moderan sajt koji lepo izgleda
                      na telefonu i računaru – ovo je pravi izbor.
                      <br />
                      <br />
                      <strong>Uključeno:</strong>
                      <br />
                      • Do 5 stranica (npr. početna, o nama, usluge, kontakt…)
                      <br />
                      • Responzivan dizajn (radi na mobilnim uređajima)
                      <br />
                      • Osnovna SEO priprema
                      <br />
                      • Kontakt forma i osnovne funkcionalnosti
                      <br />
                      <br />
                      <em>Idealan za online prisustvo bez velikog ulaganja.</em>
                    </p>
                    <Link href="/paketi" className="btn-1">
                      Pogledaj sve pakete
                    </Link>
                  </div>
                </>
              )}
              {activePackage === "professional" && (
                <>
                  <h3>⭐ Professional paket</h3>
                  <p>
                    Za one koji žele da se izdvoje i pokažu ozbiljnost.
                    <br />
                    Tvoj sajt dobija karakter – lep dizajn, dodatne
                    funkcionalnosti i sve što ti treba da rasteš online.
                    <br />
                    <br />
                    <strong>Uključeno:</strong>
                    <br />
                    • Do 10 stranica i prilagođen dizajn
                    <br />
                    • Optimizovan za brzinu i sigurnost
                    <br />
                    • Blog/news sekcija po želji
                    <br />
                    • Povezivanje sa društvenim mrežama i Google alatima
                    <br />
                    • 1 mesec podrške nakon lansiranja
                    <br />
                    <br />
                    <em>Idealan za: sajt koji radi za tebe 24/7.</em>
                  </p>
                  <Link href="/paketi" className="btn-1">
                    Pogledaj sve pakete
                  </Link>
                </>
              )}
              {activePackage === "enterprise" && (
                <>
                  <h3>💼 Enterprise paket</h3>
                  <p>
                    All-in-one rešenje za ozbiljan biznis.
                    <br />
                    Ako ti je sajt ključan deo posla – e-commerce, rezervacije,
                    integracije – ovo je tvoja opcija.
                    <br />
                    <br />
                    <strong>Uključeno:</strong>
                    <br />
                    • Neograničen broj stranica i potpuno custom dizajn
                    <br />
                    • Online prodavnica ili napredne funkcionalnosti po meri
                    (rezervacije, CRM integracije…)
                    <br />
                    • Napredna SEO optimizacija i analitika
                    <br />
                    • Višejezična podrška (po potrebi)
                    <br />
                    • Prioritetna podrška i održavanje
                    <br />
                    • Konsultacije i plan za online rast
                    <br />
                    <br />
                    <strong>
                      Dodatno – Custom poslovna rešenja (Full-Stack aplikacije):
                    </strong>
                    • Razvoj aplikacija po meri (frontend + backend)
                    <br />
                    • Admin paneli, korisnički nalozi, dashboard sistemi
                    <br />
                    • Integracije sa CRM/ERP alatima, plaćanjem i eksternim
                    API-jima
                    <br />
                    • Web aplikacije koje rastu zajedno sa tvojim biznisom
                    <br />
                    • Potpuno prilagođen dizajn i arhitektura sistema
                    <br />
                    <br />
                    <em>
                      Idealan za: profesionalan nastup i dugoročnu strategiju.
                    </em>
                  </p>
                  <Link href="/paketi" className="btn-1">
                    Pogledaj sve pakete
                  </Link>
                </>
              )}
            </div>
          )}
          <style>{`
      .package-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: #ff6347;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
      }
      .package-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }
      .package-overlay-content {
        background: #fff;
        color: #222;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 2px 24px rgba(0,0,0,0.2);
        text-align: center;
        transform: translateY(40px);
        opacity: 0;
        transition: opacity 0.4s, transform 0.4s cubic-bezier(.4,0,.2,1);
      }
      .package-overlay.open .package-overlay-content {
        opacity: 1;
        transform: translateY(0);
      }
      .close-btn {
        position: absolute;
        top: 1rem; right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        color: #e53935;
        cursor: pointer;
      }
        .btn-1{
          background: #ff6347;
          color: #fff;
          border: none;
          border-radius: 1rem;
          padding: 0.8rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-1:hover {
          background: #fff;
          color: #ff6347;
          transform: scale(1.07);
          border: 2px solid #ff6347;
        }
    `}</style>
        </div>
      )}

      {/* Why us section */}
      <section id="whyus" className="cards-section whyus-section">
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Stručni Tim</h2>
          <p>Iskusni profesionalci posvećeni vašem uspehu.</p>
          <img
            src="/team.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
        </div>
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Prilagođena Rešenja</h2>
          <p>
            Prilagođavamo naše pristupe kako bismo zadovoljili potrebe vašeg
            poslovanja.
          </p>
          <img
            src="/custom.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
        </div>
        <div className="card whyus-card" style={{ background: "#ff6347" }}>
          <h2>Podrška i Bezbednost</h2>
          <p>Pouzdana podrška i robusna zaštita podataka za vašu sigurnost.</p>
          <img
            src="/security.svg"
            alt="ITBox Logo"
            style={{ width: "100px", marginTop: "1rem" }}
          />
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

.package-card img, .whyus-card img {
width: 80px !important;
height: 55px !important;
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
          <input type="text" placeholder="Vaše ime" />
          <input type="email" placeholder="Vaš email" />
          <textarea placeholder="Vaša poruka"></textarea>
          <button className="btn-1" type="submit">
            Pošalji poruku
          </button>
        </form>
        <style>{`

        .btn-1{
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          background: #ff6347;
          color: #fff;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
        }
        .btn-1:hover {
        background: #fff;
          background: #ff6347;
          color: #fff;
          transform: scale(1.07);
          border: 2px solid #ff6347;
          transition: background 0.4s, color 0.4s, transform 0.4s;
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
                  
              `}</style>
      </section>
    </main>
  );
}

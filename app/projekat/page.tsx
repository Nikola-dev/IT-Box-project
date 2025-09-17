"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ONama() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
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
          <a href="/">Početna</a>
          <a href="/paketi">Paketi</a>
          <a href="/projekat">O projektu IT Box</a>
          <a href="/faq">FAQ</a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <style>{`
        body, html, .paketi-main {
        background: #ff6347 !important;
        min-height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
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
        <a href="/" onClick={() => setMenuOpen(false)}>
          Početna
        </a>
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
      <h1 className="faq-title">O projektu IT Box</h1>
      <div className="about-block about-animate">
        <p>
          IT Box je inovativna platforma kreirana za digitalizaciju malih i
          srednjih biznisa.
          <br />
          Naš cilj je da omogućimo jednostavan, brz i pristupačan ulazak u
          online svet.
          <br />
          <br />
          Bilo da vam je potreban sajt, prodavnica ili poslovna aplikacija, IT
          Box tim je tu da vas podrži na svakom koraku,{" "}
          <strong>uz minimalne troškove i maksimalnu posvećenost.</strong>
        </p>
        <br />
        <br />
        <p>
          Suština jeste da svako može kontaktirati reprezentativnog člana tima i
          dobiti pomoć, podršku i savete prilagođene njihovim potrebama, potpuno
          besplatno. Pogledaj{" "}
          <Link href="/faq">
            <strong>FAQ</strong>
          </Link>{" "}
          sekciju za više informacija.
        </p>
        <br />
        <p>
          Hvala vam što ste deo naše zajednice i radujemo se što ćemo zajedno
          graditi budućnost digitalnog poslovanja!
        </p>
      </div>
      <style>{`
  .about-block {
  background: #fff;
  color: #ff6347;
  border-radius: 1.5rem;
  max-width: auto;
  margin: 2rem auto 0 auto;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  opacity: 1;
  margin-left: 1rem;
  margin-right: 1rem;
}
  .faq-title {
              text-align: center;
              color: #fff;
              margin-top: 6rem;
              font-size: 2.2rem;
              font-weight: 700;
            }
.about-block h2 {
  margin-bottom: 1rem;
}
.about-block p {
  font-size: 1.15rem;
  margin-bottom: 0;
}
.about-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: aboutFadeIn 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes aboutFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
@media (max-width: 900px) {
  .about-block {
    margin: 5rem 1rem 0 1rem;
    padding: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
    
}
`}</style>
    </main>
  );
}

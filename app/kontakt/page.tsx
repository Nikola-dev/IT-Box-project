"use client";
import Image from "next/image";
import { useState } from "react";

export default function KontaktPage() {
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
          <a href="/ ">Početna</a>
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
        <a href="/ " onClick={() => setMenuOpen(false)}>
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
      <div className="faq-tabs">
        <a
          href="mailto:itbox.dev@icloud.com"
          className="faq-tab kontakt-animate"
          style={{ animationDelay: "0.1s", textDecoration: "none" }}
        >
          Email: <span> itbox.dev@icloud.com</span>
        </a>
        <a
          href="tel:+381669438755"
          className="faq-tab kontakt-animate"
          style={{ animationDelay: "0.19s", textDecoration: "none" }}
        >
          Telefon: <span> +381669438755</span>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Smederevo,+Centralna+Srbija"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-tab kontakt-animate"
          style={{ animationDelay: "0.28s", textDecoration: "none" }}
        >
          Lokacija: <span> Smederevo / Srbija</span>
        </a>
      </div>
      <style>{`
            .faq-main {
              background: #ff6347;
              min-height: 100vh;
              padding: 0;
            }
              .faq-tabs{
                  margin-top: 20rem;
                  padding-top: 5rem;
                  display: flex;
                  justify-content: center;
                  gap: 1.5rem;
              }
                  .kontakt-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: kontaktWaveIn 0.6s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes kontaktWaveIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
            .faq-title {
              text-align: center;
              color: #fff;
              margin-top: 6rem;
              font-size: 2.2rem;
              font-weight: 700;
            }
            .faq-tabs {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 1.5rem;
              margin-top: 3rem;
            }
            .faq-tab {
              background: #fff;
              color: #ff6347;
              border: none;
              border-radius: 1.5rem;
              padding: 1rem 2rem;
              font-size: 1.1rem;
              cursor: pointer;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              transition: background 0.3s, color 0.3s, transform 0.2s;
              min-width: 180px;
              max-width: 260px;
              text-align: center;
            }
            .faq-tab:hover, .faq-tab.active {
              background: #ff6347;
              color: #fff;
              transform: scale(1.07);
            }
            .faq-content {
              margin: 2rem auto 0 auto;
              background: #fff;
              border-radius: 1.2rem;
              max-width: 400px;
              padding: 1.5rem;
              text-align: center;
              box-shadow: 0 2px 16px rgba(0,0,0,0.10);
              color: #ff6347;
              opacity: 1;
              transition: opacity 0.2s;
            }
            .fade-in {
              opacity: 1;
            }
            @media (max-width: 900px) {
              .faq-tabs {
                flex-direction: column;
                gap: 1rem;
                margin-top: 2rem;
              }
              .faq-tab {
                width: 95vw;
                min-width: unset;
                max-width: unset;
                font-size: 1rem;
                padding: 0.8rem 1rem;
                margin-left: 0.5rem;
              }
              .faq-content {
                max-width: 95vw;
                padding: 1.2rem;
              }
            }
          `}</style>
    </main>
  );
}

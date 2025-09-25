"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    key: "starter",
    label: "Starter Paket",
    desc: (
      <div>
        <p>
          Tvoj prvi korak ka online svetu!
          <br />
          Ako ti treba jednostavan i moderan sajt koji lepo izgleda na telefonu
          i računaru – ovo je pravi izbor.
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
        <hr />
        <h4>📌 Za koga je Starter paket?</h4>
        <p>
          Starter paket je kreiran za male firme, preduzetnike i pojedince koji
          žele profesionalan online nastup, ali bez kompleksnih funkcija.
          <br />
          <br />
          <strong>Tipični korisnici:</strong>
          <br />
          • Lokalne radnje i restorani
          <br />
          • Freelanceri i zanatlije
          <br />• Udruženja i male organizacije
        </p>
        <hr />
        <h4>🛠️ Šta tačno dobijaš?</h4>
        <p>
          <strong>1. Do 5 stranica</strong>
          <br />
          Početna, O nama, Usluge/Proizvodi, Galerija/Portfolio, Kontakt (možeš
          kombinovati prema potrebama).
          <br />
          <br />
          <strong>2. Responzivan dizajn</strong>
          <br />
          Sajt koji izgleda i radi dobro na mobilnom, tabletu i desktopu.
          <br />
          <br />
          <strong>3. Osnovna SEO priprema</strong>
          <br />
          Meta tagovi, osnovna optimizacija sadržaja i strukture da te pretraga
          lakše pronađe.
          <br />
          <br />
          <strong>4. Kontakt forma i osnovne funkcionalnosti</strong>
          <br />
          Formular, mapa lokacije, dugmad za društvene mreže i jednostavna
          galerija/slajder.
        </p>
        <hr />
        <h4>🎯 Prednosti</h4>
        <p>
          • Brza izrada i lansiranje sajta
          <br />
          • Niska investicija u odnosu na vrednost
          <br />• Laka nadogradnja kasnije (dodavanje prodavnice, više stranica,
          integracija)
        </p>
        <hr />
        <h4>💡 Primeri upotrebe</h4>
        <p>
          • Frizerski salon – prikaz usluga i kontakt za rezervacije
          <br />
          • Lokalni restoran – online meni i kontakt forma
          <br />• Freelancer – portfolio i osnovni blog
        </p>
        <hr />
        <p>
          👉 Ukratko: Starter paket je{" "}
          <strong>najbrži i najjednostavniji način</strong> da zakoračiš u
          online svet sa profesionalnim izgledom sajta.
          <br />
          <br />
        </p>
      </div>
    ),
    icon: "/starter.svg",
  },
  {
    key: "professional",
    label: "Profesionalni Paket",
    desc: (
      <div>
        <p>
          Za one koji žele da se izdvoje i pokažu ozbiljnost.
          <br />
          Tvoj sajt dobija karakter – lep dizajn, dodatne funkcionalnosti i sve
          što ti treba da rasteš online.
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

        <hr />

        <h4>📌 Za koga je Professional paket?</h4>
        <p>
          Ovaj paket je namenjen firmama i preduzetnicima koji žele da podignu
          svoj online nastup na viši nivo.
          <br />
          <br />
          <strong>Tipični korisnici:</strong>
          <br />
          • Male i srednje firme koje žele jači vizuelni identitet
          <br />
          • Startapi kojima je potreban sajt koji raste zajedno sa njima
          <br />• Biznisi kojima je važna prezentacija brenda i redovno
          objavljivanje sadržaja
        </p>

        <hr />

        <h4>🛠️ Šta tačno dobijaš?</h4>
        <p>
          <strong>1. Do 10 stranica i prilagođen dizajn</strong>
          <br />
          Sajt prilagođen tvom brendu – sa dovoljno prostora da predstaviš
          usluge, proizvode i portfolio.
          <br />
          <br />
          <strong>2. Optimizacija brzine i sigurnosti</strong>
          <br />
          Brz sajt koji se lako učitava i osnovne bezbednosne mere (SSL, zaštita
          od spama i sl.).
          <br />
          <br />
          <strong>3. Blog / news sekcija</strong>
          <br />
          Ako želiš da redovno deliš novosti, članke ili vesti iz industrije –
          blog sekcija je uključena.
          <br />
          <br />
          <strong>4. Integracije</strong>
          <br />
          Povezivanje sa društvenim mrežama, Google Analytics, Google Maps i
          drugim alatima koji ti pomažu da pratiš i razvijaš svoj biznis.
          <br />
          <br />
          <strong>5. Podrška</strong>
          <br />1 mesec tehničke podrške nakon lansiranja sajta – za sitne
          izmene i pomoć oko korišćenja.
        </p>

        <hr />

        <h4>🎯 Prednosti</h4>
        <p>
          • Sajt koji izgleda profesionalno i uliva poverenje
          <br />
          • Dodatne funkcionalnosti koje ti pomažu da komuniciraš sa publikom
          <br />
          • Bolja optimizacija i sigurnost nego kod Starter paketa
          <br />• Mogućnost nadogradnje na napredne funkcionalnosti kada ti
          zatreba
        </p>

        <hr />

        <h4>💡 Primeri upotrebe</h4>
        <p>
          • Konsultantska firma koja želi da deli blog članke i gradi autoritet
          <br />
          • Startap koji treba prezentaciju svog proizvoda i integraciju sa
          alatima
          <br />• Agencija ili firma koja želi moderniji i ozbiljniji online
          nastup
        </p>

        <hr />

        <p>
          👉 Ukratko: Professional paket je{" "}
          <strong>sledeći korak nakon osnovnog online prisustva</strong> –
          savršen za biznise koji žele da izgrade brend i imaju sajt koji
          aktivno doprinosi rastu.
          <br />
          <br />
        </p>
      </div>
    ),
    icon: "/professional.svg",
  },
  {
    key: "enterprise",
    label: "Enterprise Paket",
    desc: (
      <div>
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
          • Online prodavnica ili napredne funkcionalnosti po meri (rezervacije,
          CRM integracije…)
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
          <br />
          • Razvoj aplikacija po meri (frontend + backend)
          <br />
          • Admin paneli, korisnički nalozi, dashboard sistemi
          <br />
          • Integracije sa CRM/ERP alatima, plaćanjem i eksternim API-jima
          <br />
          • Web aplikacije koje rastu zajedno sa tvojim biznisom
          <br />
          • Potpuno prilagođen dizajn i arhitektura sistema
          <br />
          <br />
          <em>Idealan za: profesionalan nastup i dugoročnu strategiju.</em>
        </p>

        <hr />

        <h4>📌 Za koga je Enterprise paket?</h4>
        <p>
          Namenjen kompanijama kojima sajt nije samo vizit karta, već centralni
          deo poslovanja.
          <br />
          <br />
          <strong>Tipični korisnici:</strong>
          <br />
          • E-commerce prodavnice sa velikim katalogom proizvoda
          <br />
          • Hoteli, restorani i servisi kojima trebaju rezervacioni sistemi
          <br />
          • Veće firme kojima su potrebne integracije sa internim softverima
          <br />• Startapi i scale-up biznisi kojima je web aplikacija osnovni
          proizvod
        </p>

        <hr />

        <h4>🛠️ Šta tačno dobijaš?</h4>
        <p>
          <strong>1. Custom dizajn i neograničen broj stranica</strong>
          <br />
          Sajt potpuno kreiran prema tvojim potrebama, bez ograničenja u
          strukturi.
          <br />
          <br />
          <strong>2. Napredne funkcionalnosti</strong>
          <br />
          Online prodavnica, rezervacioni sistem, korisnički nalozi, CRM
          integracije i sve što tvom biznisu treba.
          <br />
          <br />
          <strong>3. SEO + analitika</strong>
          <br />
          Optimizacija za Google i detaljna analitika poseta, praćenje
          performansi i prilagođavanje strategije.
          <br />
          <br />
          <strong>4. Višejezična podrška</strong>
          <br />
          Ako posluješ na više tržišta, dobijaš potpuno funkcionalan višejezičan
          sajt.
          <br />
          <br />
          <strong>5. Prioritetna podrška i održavanje</strong>
          <br />
          Brza i direktna podrška, kao i redovno održavanje sajta i sistema.
          <br />
          <br />
          <strong>6. Full-Stack rešenja</strong>
          <br />
          Custom web aplikacije, admin paneli, integracije i sistemi napravljeni
          da rastu zajedno sa tvojim biznisom.
        </p>

        <hr />

        <h4>🎯 Prednosti</h4>
        <p>
          • Potpuno prilagođeno digitalno rešenje
          <br />
          • Besprekorno iskustvo za korisnike i klijente
          <br />
          • Napredna optimizacija i sigurnost
          <br />• Dugoročna saradnja i strategija rasta
        </p>

        <hr />

        <h4>💡 Primeri upotrebe</h4>
        <p>
          • Velika online prodavnica sa hiljadama proizvoda i integracijom
          plaćanja
          <br />
          • Hotel sa sistemom online rezervacija i sinhronizacijom sa eksternim
          platformama
          <br />
          • Kompanija koja traži poslovni portal sa dashboard-om i internim
          aplikacijama
          <br />• SaaS startap kome je web aplikacija glavni proizvod
        </p>

        <hr />

        <p>
          👉 Ukratko: Enterprise paket je{" "}
          <strong>najkompletnije rešenje</strong> – za kompanije koje žele da
          web bude ključan deo njihovog poslovanja i razvoja.
          <br />
          <br />
        </p>
      </div>
    ),
    icon: "/enterprise.svg",
  },
];

export default function Paketi() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fade, setFade] = useState(true);

  function handleTabChange(key: string) {
    setFade(false);
    setTimeout(() => {
      setActiveTab((prev) => (prev === key ? null : key));
      setFade(true);
    }, 200);
  }

  const activePackage = packages.find((p) => p.key === activeTab);

  return (
    <main className="paketi-main">
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
          priority
        />

        <div className="nav-links">
          <a href="/ ">Početna</a>
          <a href="/paketi">Paketi</a>
          <a href="/projekat">O projektu IT Box</a>
          <a href="/faq">FAQ</a>
          <a href="/kontakt">Kontakt</a>
        </div>
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
      <div className="paketi-tabs tabs-animate">
        {packages.map((pkg, idx) => (
          <button
            key={pkg.key}
            className={`paketi-tab paketi-animate`}
            style={{ animationDelay: `${0.1 + idx * 0.09}s` }}
            onClick={() => handleTabChange(pkg.key)}
          >
            <img src={pkg.icon} alt={pkg.label} className="paketi-icon" />
            <span>{pkg.label}</span>
          </button>
        ))}
      </div>
      {activePackage && (
        <div className={`paketi-content${fade ? " fade-in" : " fade-out"}`}>
          <h2>{activePackage.label}</h2>
          <p>{activePackage.desc}</p>
        </div>
      )}
      <style>{`
      body, html, .paketi-main {
        background: #ff6347 !important;
        min-height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
        .paketi-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: paketiWaveIn 0.6s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes paketiWaveIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
        .tabs-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: tabsFadeIn 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes tabsFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

        .paketi-tab:hover {
          background: #ff6347;
          color: #fff;
          transition: background 0.4s, color 0.4s;
          transform: scale(1.07);
          transition: transform 0.4s;
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
.navbar img {
  margin-left: -2rem;
  margin-top: -2rem;
  vertical-align: middle;
  display: inline-block;
  height: 100px;
  width: auto;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
        
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s;
        }
          .navbar a:hover {
        text-decoration: underline;
        color: white;
      }
        .nav-hamburger-overlay {
          position: fixed;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          z-index: 200;
          display: none;
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
        .paketi-tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 8rem;
        }
        .paketi-tab {
          background: #fff;
          color: #ff6347;
          border: none;
          border-radius: 2rem;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.4s, color 0.4s, transform 0.4s;

        }
        .paketi-tab.active {
          background: #ff6347;
          color: #fff;
        }
        .paketi-tab .paketi-icon {
          width: 32px;
          height: 32px;
        }
        .paketi-content {
          margin: 3rem auto 0 auto;
          background: #fff;
          border-radius: 1.5rem;
          max-width: 400px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 2px 16px rgba(0,0,0,0.10);
          box-sizing: border-box;
          color: #ff6347;
        }
        .paketi-icon-large {
          width: 64px;
          height: 64px;
          margin-bottom: 1rem;
        }
        @media (max-width: 900px) {
          .paketi-tabs {
            flex-direction: column;
            gap: 1rem;
            margin-top: 7rem;
          }
            .nav-hamburger-overlay {
    display: block !important;
  }
  .nav-links {
    display: none !important;
  }
            .paketi-tab {
            width: 95%;
            margin-left:0.55rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    min-width: 140px;
  }
          .paketi-content {
            max-width: 95vw;
            padding: 1.2rem;
          }
            .paketi-content {
  transition: opacity 0.2s;
  opacity: 1;
}
.paketi-content.fade-in {
  opacity: 1;
}
.paketi-content.fade-out {
  opacity: 0;
}
  
            

@media (max-width: 767px) {
  .nav-links {
    display: none !important;
  }
    
}
      `}</style>

      <div className="paketi-help-section help-animate">
        <strong className="str-1">Treba vam pomoć pri izboru paketa?</strong>
        <p>
          Ako niste sigurni koji paket je najbolji za vaše potrebe, slobodno nas
          kontaktirajte.
          <br />
          Naš tim će vam pomoći da odaberete optimalno rešenje za vaš biznis.
        </p>
        <Link href="/kontakt">
          <button className="paketi-btn">Kontaktirajte nas</button>
        </Link>
      </div>
      <style>{`
      .paketi-help-section {
  background: #fff;
  color: #ff6347;
  border-radius: 1.5rem;
  max-width: 400px;
  margin: 3rem auto 0 auto;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  transition: box-shadow 0.2s;
  transition: transform 0.2s;
  box-sizing: border-box;
  padding-bottom: 1rem;
  padding-top: 1rem;
  
}
.paketi-help-section:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  transform: translateY(-4px);


}
  .help-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: tabsFadeIn 0.7s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes helpFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.paketi-help-section h3 {
  margin-bottom: 1rem;
}
.paketi-help-section p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
.paketi-btn {
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
.paketi-btn:hover {
  transform: scale(1.07);
  border: 2px solid #ff6347;
}
@media (max-width: 900px) {
  .paketi-help-section {
    width: 100%;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    padding: 1.2rem;
    box-sizing: border-box;
  }
}
}

`}</style>
    </main>
  );
}

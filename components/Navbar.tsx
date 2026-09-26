"use client";
import { useState } from "react";
import Logo from "./Logo";
import { SITE } from "./site";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#requirements", label: "Buyer Requirements" },
  { href: "#products", label: "Products" },
  { href: "#journey", label: "Export Support" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" aria-label="RJ BUSINESS home" onClick={() => setOpen(false)}>
          <Logo size={40} />
        </a>
        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.cta}>
          <a className={styles.phone} href={SITE.tel}>
            {SITE.phoneDisplay}
          </a>
          <a className="btn btn-gold" href="#contact">
            Enquire Now
          </a>
        </div>
        <button
          className={styles.burger}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className={styles.mobile} aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-gold" href="#contact" onClick={() => setOpen(false)}>
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
}

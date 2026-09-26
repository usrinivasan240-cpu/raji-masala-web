"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "./site";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/buyer-requirements", label: "Buyer Requirements" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" aria-label="RJ BUSINESS home" onClick={() => setOpen(false)}>
          <Logo size={40} />
        </Link>
        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className={styles.cta}>
          <a className={styles.phone} href={SITE.tel}>
            {SITE.phoneDisplay}
          </a>
          <Link className="btn btn-gold" href="/contact">
            Enquire Now
          </Link>
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
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-gold" href="/contact" onClick={() => setOpen(false)}>
            Enquire Now
          </Link>
        </nav>
      )}
    </header>
  );
}

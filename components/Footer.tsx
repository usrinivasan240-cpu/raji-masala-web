import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "./site";
import styles from "./Footer.module.css";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/buyer-requirements", label: "Buyer Requirements" },
  { href: "/products", label: "Supplier Sourcing" },
  { href: "/services#journey", label: "Export Support" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Logo size={46} light />
          <p className={styles.tag}>{SITE.tagline}</p>
          <p className={styles.moto}>Research • Connect • Export</p>
        </div>
        <nav aria-label="Footer">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className={styles.contact}>
          <a href={SITE.tel}>{SITE.phoneDisplay}</a>
          <a href={SITE.emailHref}>{SITE.email}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
            Instagram: {SITE.instagramHandle}
          </a>
        </div>
      </div>
      <div className={styles.bar}>
        <div className="container">
          <small>© 2026 RJ BUSINESS. Connecting Indian Businesses with Global Opportunities.</small>
        </div>
      </div>
    </footer>
  );
}

import Reveal from "./Reveal";
import styles from "./Audiences.module.css";

const EXPORTER = [
  "Foreign Buyer Research",
  "Buyer Verification",
  "Buyer Background Checking",
  "Product + Country Based Prospecting",
  "Buyer–Supplier Connection Support",
  "Safer Payment & Fraud Risk Awareness",
  "Export Business Development Support",
  "Indian Supplier / Manufacturer Connection",
];

const IMPORTER = [
  "Tamil Nadu / India Supplier Sourcing",
  "Manufacturer & Supplier Research",
  "Supplier Verification",
  "Factory Visit",
  "Quality Inspection / Basic QC Support",
  "Factory Visit & Audit Reports",
  "Product Requirement Coordination",
  "India-based Sourcing Support",
];

export default function Audiences() {
  return (
    <section id="audiences" className="section section-soft">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Who We Work With</span>
          <h2>
            Two Pathways, <em>One Trusted Partner</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.grid}>
          <Reveal>
            <article className={styles.card}>
              <p className={styles.tag}>For Indian Exporters</p>
              <h3>Reach Genuine Foreign Buyers</h3>
              <ul>
                {EXPORTER.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a className="btn btn-navy" href="#contact">
                Enquire Now
              </a>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className={`${styles.card} ${styles.dark}`}>
              <p className={styles.tag}>For Foreign Importers</p>
              <h3>Source Verified Indian Suppliers</h3>
              <ul>
                {IMPORTER.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a className="btn btn-gold" href="#contact">
                Enquire Now
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import styles from "./About.module.css";

const FOCUS = [
  "Market research",
  "Buyer intelligence",
  "Supplier sourcing",
  "Buyer verification",
  "Supplier verification",
  "Export support",
  "Import support",
  "Requirement coordination",
  "Business connection support",
  "Logistics guidance",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About RJ Business</span>
          <h2>
            Need the Right Business Partner? <em>We Find. We Verify. We Support.</em>
          </h2>
          <div className="gold-rule" />
          <p className="lead">
            RJ BUSINESS helps Indian exporters and foreign importers connect with the right suppliers,
            buyers and trusted business partners — from first research to final shipment support.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {FOCUS.map((f, i) => (
            <Reveal key={f} delay={Math.min(i * 40, 320)}>
              <div className={`card ${styles.item}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {f}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.msgs}>
            {["Connect • Source • Export", "Research • Connect • Export", "Helping Businesses Export Smarter", "Let’s Build Global Connections", "Your Business. Our Global Support."].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

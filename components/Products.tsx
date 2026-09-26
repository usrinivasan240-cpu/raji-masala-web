import Reveal from "./Reveal";
import { SITE } from "./site";
import styles from "./Products.module.css";

const FEATURED = [
  { name: "Fresh Ginger", line: "Export-grade ginger matched to overseas buyer specifications." },
  { name: "Turmeric Finger", line: "Sourced for quality grade, packing and consistent supply." },
  { name: "Coriander Seeds", line: "Buyer-ready lots with clear specs and competitive pricing." },
  { name: "Green Chilli G4", line: "Regular-supply sourcing for UAE and GCC buyers." },
];

const CATS = ["Fresh agricultural products", "Spices", "Food products", "Other exportable products"];

const GINGER = ["Export Market Research", "Overseas Buyer Prospecting", "Buyer Verification", "Requirement & Quotation Coordination", "Buyer Contact Research", "Export Business Support"];

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Sourcing Categories</span>
          <h2>
            Products We <em>Help Source</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.grid}>
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 60, 240)}>
              <article className={`card ${styles.card}`}>
                <span className={styles.leaf} aria-hidden="true">❧</span>
                <h3>{p.name}</h3>
                <p>{p.line}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.cats}>
            {CATS.map((c) => (
              <span key={c}>{c}</span>
            ))}
            <small>Additional products can be added as sourcing needs grow.</small>
          </div>
        </Reveal>
        <Reveal>
          <article id="ginger" className={styles.ginger}>
            <div>
              <span className={styles.geyebrow}>Featured Sourcing Support</span>
              <h3>Planning to Export Fresh Ginger From India?</h3>
              <p className={styles.gsub}>Finding the right overseas buyers can be challenging. Let RJ BUSINESS help you!</p>
              <div className={styles.chips}>
                {GINGER.map((g) => (
                  <span key={g}>{g}</span>
                ))}
              </div>
              <p className={styles.gmsg}>You focus on the product. We help you find the right market &amp; buyers.</p>
              <a className="btn btn-gold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Discuss Ginger Export</a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

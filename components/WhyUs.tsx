import Reveal from "./Reveal";
import styles from "./WhyUs.module.css";

const VALUES = [
  { t: "Buyer & Supplier Verification", d: "Every connection screened before it reaches you." },
  { t: "Market-Specific Buyer Prospecting", d: "Prospects matched to your product and country." },
  { t: "Quality Checks & Risk Assessment", d: "On-ground checks that cut surprises." },
  { t: "Global Reach", d: "Sourcing opportunities across international markets." },
  { t: "Personalized Support", d: "One team that knows your requirement end to end." },
  { t: "Transparent Process", d: "Clear steps, reports and communication throughout." },
  { t: "Safer Trade", d: "Verification-first working that lowers fraud risk." },
  { t: "Stronger Partnerships", d: "Built for repeat, long-term business." },
  { t: "Global Growth", d: "Support that scales as your exports grow." },
];

const STEPS = ["Research", "Verify", "Connect", "Export", "Support"];

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Why RJ Business</span>
          <h2>
            Trade With <em>Confidence</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.grid}>
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={Math.min(i * 40, 280)}>
              <article className={`card ${styles.card}`}>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <span key={s}>
                <b>{String(i + 1).padStart(2, "0")}</b> {s}
                {i < STEPS.length - 1 && <i>→</i>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

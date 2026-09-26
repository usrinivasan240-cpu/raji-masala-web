import Reveal from "./Reveal";
import styles from "./Journey.module.css";

const STEPS = [
  "Understand the Requirement",
  "Research the Market",
  "Identify Buyers / Suppliers",
  "Verify Business Connections",
  "Coordinate Requirements",
  "Support Export Documentation",
  "Support Communication",
  "Follow Up",
];

export default function Journey() {
  return (
    <section id="journey" className="section section-soft">
      <div className="container">
        <Reveal>
          <span className="eyebrow">How It Works</span>
          <h2>
            From Business Idea <em>to Global Trade</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.list}>
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={Math.min(i * 50, 300)}>
              <div className={styles.step}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <p>{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

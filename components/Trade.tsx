import Reveal from "./Reveal";
import styles from "./Trade.module.css";

const PROBLEMS = ["No verified leads?", "Quality issues?", "Supplier risks?", "No verified buyers?", "Communication problems?", "Payment concerns?", "Logistics uncertainty?"];

const SOLUTIONS = ["Direct supplier connections", "Premium sourcing", "Local verification", "On-ground visits", "GST / IEC checks", "QC inspections", "Pre-shipment support", "Verified buyer connections", "Full trade management"];

export default function Trade() {
  return (
    <>
      <section id="challenges" className="section section-soft">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Problem → Solution</span>
            <h2>
              Trade Barriers, <em>Removed</em>
            </h2>
            <div className="gold-rule" />
          </Reveal>
          <div className={styles.split}>
            <Reveal>
              <article className={styles.prob}>
                <h3>International Trade Challenges</h3>
                <ul>
                  {PROBLEMS.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <div className={styles.badge} aria-hidden="true">Secure. Verified.<br />Efficient Trade.</div>
            <Reveal delay={120}>
              <article className={styles.sol}>
                <h3>Your Solutions: Export &amp; Import Support</h3>
                <ul>
                  {SOLUTIONS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
          <Reveal>
            <p className={styles.bottom}>Partner with RJ BUSINESS. Save Time. Reduce Risk. Grow Your Business.</p>
          </Reveal>
        </div>
      </section>
      <section id="markets" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Export Markets</span>
            <h2>
              Indian Suppliers. <em>Global Buyers.</em>
            </h2>
            <div className="gold-rule" />
          </Reveal>
          <Reveal>
            <div className={styles.map} role="img" aria-label="Trade routes from India to UAE, GCC and global markets">
              <svg viewBox="0 0 1000 420" aria-hidden="true">
                <g fill="#14418f" opacity="0.14">
                  {Array.from({ length: 20 }).map((_, r) =>
                    Array.from({ length: 48 }).map((_, c) => (
                      <circle key={`${r}-${c}`} cx={15 + c * 21} cy={15 + r * 21} r="2" />
                    ))
                  )}
                </g>
                <path d="M640 220 Q740 150 800 165" fill="none" stroke="#c9a227" strokeWidth="3" strokeDasharray="9 7" />
                <path d="M640 220 Q760 230 860 200" fill="none" stroke="#14418f" strokeWidth="2.5" strokeDasharray="7 7" />
                <path d="M640 220 Q720 300 880 290" fill="none" stroke="#14418f" strokeWidth="2" strokeDasharray="6 7" opacity="0.7" />
                <circle cx="640" cy="220" r="8" fill="#0a1f44" />
                <circle cx="640" cy="220" r="14" fill="none" stroke="#c9a227" strokeWidth="2" />
                <circle cx="800" cy="165" r="6" fill="#c9a227" />
                <circle cx="860" cy="200" r="6" fill="#14418f" />
                <circle cx="880" cy="290" r="6" fill="#14418f" />
                <text x="640" y="258" textAnchor="middle" fontSize="17" fontWeight="800" fill="#0a1f44">INDIA</text>
                <text x="800" y="145" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0a1f44">UAE · DUBAI</text>
                <text x="862" y="180" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0a1f44">GCC</text>
              </svg>
              <div className={styles.chips}>
                {["India", "UAE", "GCC", "Dubai", "International Ports", "Cargo Ships", "Air Freight"].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <p className={styles.cap}>Global sourcing opportunities. Markets based on product requirements.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

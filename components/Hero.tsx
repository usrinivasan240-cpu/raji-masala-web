import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

const FLOW = ["Research", "Connect", "Verify", "Source", "Export", "Support"];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <svg className={styles.map} viewBox="0 0 1200 500" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <g fill="#ffffff" opacity="0.10">
          {Array.from({ length: 24 }).map((_, r) =>
            Array.from({ length: 48 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={20 + c * 25} cy={20 + r * 21} r="2.2" />
            ))
          )}
        </g>
        <path d="M820 250 Q950 180 1010 200" fill="none" stroke="#c9a227" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.9" />
        <path d="M820 250 Q900 320 1050 300" fill="none" stroke="#c9a227" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
        <circle cx="820" cy="250" r="7" fill="#c9a227" />
        <circle cx="820" cy="250" r="13" fill="none" stroke="#c9a227" strokeWidth="1.5" opacity="0.6" />
        <circle cx="1010" cy="200" r="5" fill="#e3c15c" />
        <circle cx="1050" cy="300" r="5" fill="#e3c15c" />
      </svg>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <p className={styles.eyebrow}>B2B Global Trade &amp; Sourcing Partner</p>
          <h1 className={styles.h1}>
            Global Opportunities <em>for Your Business</em>
          </h1>
          <p className={styles.sub}>
            We help manufacturers, suppliers and exporters find the right international buyers and connect
            with genuine business opportunities.
          </p>
          <div className={styles.ctas}>
            <Link className="btn btn-gold" href="/contact">
              Find Buyers
            </Link>
            <Link className="btn btn-outline" href="/products">
              Find Suppliers
            </Link>
            <Link className={styles.textCta} href="/contact">
              Enquire Now →
            </Link>
          </div>
          <p className={styles.trust}>
            <span className={styles.tick}>✓</span> Your Trusted Partner for Safe International Trade
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.panel} role="img" aria-label="Global trade visual: shipping routes from India to world markets">
            <div className={styles.shipRow}>
              <span>◈ Sea Freight</span>
              <span>✈ Air Cargo</span>
              <span>▣ ICD Ports</span>
            </div>
            <p className={styles.route}>
              India <b>→</b> UAE <b>→</b> GCC <b>→</b> Global Buyers
            </p>
            <div className={styles.msg}>“Connecting Indian Businesses with Global Opportunities”</div>
          </div>
        </Reveal>
      </div>
      <div className={`container ${styles.flow}`}>
        {FLOW.map((s, i) => (
          <span key={s} className={styles.step}>
            <b>{String(i + 1).padStart(2, "0")}</b> {s}
            {i < FLOW.length - 1 && <i>→</i>}
          </span>
        ))}
      </div>
    </section>
  );
}

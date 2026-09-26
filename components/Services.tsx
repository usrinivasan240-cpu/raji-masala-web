import Reveal from "./Reveal";
import { SITE } from "./site";
import styles from "./Services.module.css";

const GRID: { n: string; title: string; groups: { head?: string; items: string[] }[]; foot?: string }[] = [
  {
    n: "01",
    title: "Global Buyer & Seller Services",
    groups: [
      {
        head: "For Indian Exporters",
        items: ["International Buyer Identification", "Buyer Prospecting", "Buyer Requirement Identification", "Buyer Verification", "Market & Country Research", "Export Business Development Support"],
      },
      {
        head: "For International Buyers",
        items: ["Indian Supplier / Manufacturer Identification", "Product & Supplier Shortlisting", "Supplier Verification", "Factory Visit", "Product Inspection", "Supplier Audit & Reporting", "India-Based Sourcing Support"],
      },
    ],
  },
  {
    n: "02",
    title: "Buyer / Supplier Verification & Audit",
    groups: [
      {
        items: ["Company Profile Review", "Business Activity Verification", "Contact & Digital Presence Check", "Available Registration Document Review", "Trade Background Review", "Factory / Supplier Audit", "Product / Packaging Review", "Basic Production Review", "Photo / Video Inspection", "Detailed Audit Reports"],
      },
    ],
  },
  {
    n: "03",
    title: "Business Catalogue & B2B Presence",
    groups: [
      {
        head: "For manufacturers, suppliers & exporters",
        items: ["Company Profile", "Product Catalogue", "Product Specifications", "Product Images", "Export Capability", "Contact Details", "International Buyer-Focused Presentation"],
      },
    ],
    foot: "Indian Business Portal / Catalogue / Listing Support",
  },
  {
    n: "04",
    title: "Export Market & Buyer Development",
    groups: [
      {
        items: ["Product-Market Research", "Target Country Identification", "Buyer Segment Research", "Market Opportunity Analysis", "Competitor & Market Review", "Potential Importer Identification", "Buyer Contact Research", "Requirement-Based Prospecting", "Initial Outreach Support", "Follow-Up Strategy"],
      },
    ],
  },
  {
    n: "06",
    title: "Export Documentation & Payment Terms Support",
    groups: [
      {
        items: ["Export Documentation Assistance", "Commercial Invoice & Packing List", "Shipping Bill Guidance", "Bill of Lading / Airway Bill", "Certificate of Origin", "Import & Export Compliance", "Payment Terms", "Packing Terms", "CIF / FOB / CFR / EXW / DDP / DAP", "Banking & Trade Finance Guidance"],
      },
    ],
  },
  {
    n: "07",
    title: "Post-Consultancy Support",
    groups: [
      {
        items: ["GST Registration Process", "IEC Application Process", "Required Document Checklist", "Application Process Guidance", "Basic Export Compliance Orientation"],
      },
    ],
  },
];

const WEEKS: { w: string; title: string; items: string[] }[] = [
  { w: "Week 01", title: "Export Foundation", items: ["Export & Import Business Basics", "Product Selection", "Target Market", "Business Planning", "Export Process Overview"] },
  { w: "Week 02", title: "Registration & Documentation", items: ["IEC", "GST", "Bank / Export Documentation", "Commercial Invoice", "Packing List", "Shipping Documentation"] },
  { w: "Week 03", title: "International Trade & Payment", items: ["Buyer / Seller Communication", "INCOTERMS", "Payment Terms", "Freight & Logistics Basics", "Export Costing", "Documentation Support"] },
  { w: "Week 04", title: "Practical Export Business Development", items: ["Buyer Identification", "Buyer Verification", "Buyer Outreach", "Product Presentation", "Requirement Coordination", "Export Business Development"] },
];

const FLOW = ["Research", "Sourcing", "Buyer Identification", "Verification", "Negotiation", "Documentation Guidance", "Shipment Support", "Follow-Up"];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Our Services</span>
          <h2>
            End-to-End <em>Export &amp; Sourcing Support</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.grid}>
          {GRID.map((s) => (
            <Reveal key={s.n}>
              <article className={`card ${styles.card}`}>
                <span className={styles.num}>{s.n}</span>
                <h3>{s.title}</h3>
                {s.groups.map((g, gi) => (
                  <div key={gi}>
                    {g.head && <p className={styles.head}>{g.head}</p>}
                    <ul>
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {s.foot && <p className={styles.foot}>{s.foot}</p>}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <article className={styles.timeline}>
            <span className={styles.num}>05</span>
            <h3>30-Day Practical EXIM Business Consultancy</h3>
            <div className={styles.weeks}>
              {WEEKS.map((w) => (
                <div key={w.w} className={styles.week}>
                  <p className={styles.wtag}>{w.w}</p>
                  <h4>{w.title}</h4>
                  <ul>
                    {w.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className={`card ${styles.custom}`}>
            <span className={styles.num}>08</span>
            <h3>Custom Business Support</h3>
            <p className={styles.lead}>Continuous EXIM assistance, tailored to your business.</p>
            <div className={styles.flow}>
              {FLOW.map((f, i) => (
                <span key={f}>
                  {f}
                  {i < FLOW.length - 1 && <i>↓</i>}
                </span>
              ))}
            </div>
            <p className={styles.foot}>Custom packages available based on business requirements.</p>
          </article>
        </Reveal>

        <Reveal>
          <div className={styles.band}>
            <div>
              <h3>Not sure where to start?</h3>
              <p>Tell us your product and target market — we will map the next steps.</p>
            </div>
            <a className="btn btn-gold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              Talk to RJ BUSINESS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

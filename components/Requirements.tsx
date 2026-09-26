import Reveal from "./Reveal";
import { SITE } from "./site";
import styles from "./Requirements.module.css";

export default function Requirements() {
  return (
    <section id="requirements" className="section section-soft">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Buyer Requirements</span>
          <h2>
            Current <em>Buyer Requirements</em>
          </h2>
          <div className="gold-rule" />
          <p className={styles.sample}>Sample / Recent Buyer Requirement Posts</p>
          <p className={styles.note}>
            Illustrative examples from past posts — availability changes daily. Contact us for live requirements.
          </p>
        </Reveal>
        <div className={styles.grid}>
          <Reveal>
            <article className={`card ${styles.card}`}>
              <p className={styles.dest}>UAE · Khor Fakkan / Jebel Ali</p>
              <h3>Green Chilli G4</h3>
              <dl>
                <div><dt>Product</dt><dd>Green Chilli – G4</dd></div>
                <div><dt>Net Weight</dt><dd>3.8 kg / box</dd></div>
                <div><dt>Gross Weight</dt><dd>4.3 kg / box</dd></div>
                <div><dt>Price</dt><dd>Based on daily market price</dd></div>
                <div><dt>Payment</dt><dd>20% after reaching the container here</dd></div>
              </dl>
              <p className={styles.head}>Buyer preference</p>
              <ul><li>Good quality</li><li>Regular supply</li><li>Long-term business</li></ul>
              <p className={styles.head}>Supplier requirement</p>
              <p className={styles.text}>Suppliers with consistent quality, competitive pricing and regular supply capacity are requested to contact.</p>
              <a className="btn btn-gold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Respond via WhatsApp</a>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className={`card ${styles.card}`}>
              <p className={styles.dest}>Dubai, UAE · CIF Dubai Port</p>
              <h3>Dubai Buyer Requirement</h3>
              <dl>
                <div><dt>Products</dt><dd>Turmeric Finger, Coriander Seeds</dd></div>
                <div><dt>Destination</dt><dd>Dubai, UAE</dd></div>
                <div><dt>Price</dt><dd>CIF – Dubai Port</dd></div>
              </dl>
              <p className={styles.head}>Buyer looking for</p>
              <ul>
                <li>Genuine manufacturers / suppliers / exporters</li>
                <li>Export-quality products</li>
                <li>Competitive CIF pricing</li>
                <li>Proper product specifications &amp; packing</li>
                <li>Ability to supply consistently</li>
              </ul>
              <p className={styles.head}>Suppliers should share</p>
              <ul>
                <li>Product specification / grade</li>
                <li>Quantity available &amp; packing details</li>
                <li>Origin &amp; best CIF Dubai price</li>
                <li>Product photos</li>
                <li>Company profile / previous export details</li>
              </ul>
              <a className="btn btn-gold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Respond via WhatsApp</a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

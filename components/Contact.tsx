"use client";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { SITE } from "./site";
import styles from "./Contact.module.css";

const WA_BASE = "https://wa.me/919488016907";

const ROLES = ["Indian Exporter", "Manufacturer", "Supplier", "Foreign Importer", "Buyer", "Distributor", "Other"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "New Business Enquiry — RJ BUSINESS website",
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company") || "-"}`,
      `I am: ${fd.get("role")}`,
      `Product / Requirement: ${fd.get("product")}`,
      `Target Country: ${fd.get("country") || "-"}`,
      `Quantity: ${fd.get("quantity") || "-"}`,
      `Phone / WhatsApp: ${fd.get("phone")}`,
      `Email: ${fd.get("email") || "-"}`,
      `Message: ${fd.get("message") || "-"}`,
    ];
    window.open(`${WA_BASE}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2>
            Start Your <em>Global Conversation</em>
          </h2>
          <div className="gold-rule" />
        </Reveal>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.cards}>
              <a className={styles.btn} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <b>WhatsApp Us</b>
                <small>{SITE.phoneDisplay}</small>
              </a>
              <a className={styles.btn} href={SITE.tel}>
                <b>Call Us</b>
                <small>{SITE.phoneDisplay}</small>
              </a>
              <a className={styles.btn} href={SITE.emailHref}>
                <b>Send Email</b>
                <small>{SITE.email}</small>
              </a>
              <a className={styles.btn} href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <b>Instagram</b>
                <small>{SITE.instagramHandle}</small>
              </a>
              <a className={styles.btn} href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                <b>LinkedIn</b>
                <small>Connect professionally</small>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.row}>
                <label htmlFor="c-name">Name*<input id="c-name" name="name" required minLength={2} placeholder="Your name" autoComplete="name" /></label>
                <label htmlFor="c-company">Company Name<input id="c-company" name="company" placeholder="Company" autoComplete="organization" /></label>
              </div>
              <div className={styles.row}>
                <label htmlFor="c-role">I am
                  <select id="c-role" name="role" defaultValue="Indian Exporter">
                    {ROLES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </label>
                <label htmlFor="c-phone">Phone / WhatsApp*<input id="c-phone" name="phone" required placeholder="+91 ..." autoComplete="tel" /></label>
              </div>
              <label htmlFor="c-product">Product / Requirement*<input id="c-product" name="product" required placeholder="e.g. Fresh Ginger, 14 MT/month" /></label>
              <div className={styles.row}>
                <label htmlFor="c-country">Target Country<input id="c-country" name="country" placeholder="e.g. UAE" /></label>
                <label htmlFor="c-qty">Required Quantity<input id="c-qty" name="quantity" placeholder="e.g. 1 container" /></label>
              </div>
              <label htmlFor="c-email">Email<input id="c-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" /></label>
              <label htmlFor="c-msg">Message<textarea id="c-msg" name="message" placeholder="Tell us about your requirement..." /></label>
              <p className={styles.hint}>For buyer requirements, share product, grade/specification, quantity, destination, target price and delivery requirements.</p>
              <button className="btn btn-gold" type="submit">Submit Business Enquiry</button>
              {sent && (
                <p className={styles.done} role="status">
                  Enquiry ready — we opened WhatsApp to send it. We reply within one business day.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Contact | RJ BUSINESS — Start Your Global Conversation",
  description:
    "Contact RJ BUSINESS on WhatsApp, email or Instagram, or submit a B2B enquiry for buyers, suppliers and export support.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Journey from "../../components/Journey";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Services | RJ BUSINESS — Export, Sourcing & EXIM Support",
  description:
    "Buyer-seller services, verification and audits, B2B catalogues, market development, 30-day EXIM consultancy, documentation and custom trade support.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
        <Journey />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

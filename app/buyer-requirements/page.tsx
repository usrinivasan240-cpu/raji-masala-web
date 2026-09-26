import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Requirements from "../../components/Requirements";
import { Challenges } from "../../components/Trade";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Buyer Requirements | RJ BUSINESS — Global Sourcing",
  description:
    "Sample international buyer requirements for Indian agri and spice products — green chilli, turmeric, coriander seeds — plus verification-first trade support.",
};

export default function RequirementsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Requirements />
        <Challenges />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

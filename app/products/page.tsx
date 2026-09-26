import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Products We Help Source | RJ BUSINESS — Ginger, Turmeric, Chilli",
  description:
    "Sourcing support for fresh ginger, turmeric finger, coriander seeds, green chilli G4 and other exportable Indian products.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

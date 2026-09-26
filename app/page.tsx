import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Audiences from "../components/Audiences";
import Services from "../components/Services";
import Requirements from "../components/Requirements";
import Products from "../components/Products";
import Trade from "../components/Trade";
import WhyUs from "../components/WhyUs";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audiences />
        <Services />
        <Requirements />
        <Products />
        <Trade />
        <WhyUs />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

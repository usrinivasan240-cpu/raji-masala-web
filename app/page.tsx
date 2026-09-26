import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Audiences from "../components/Audiences";
import { Markets } from "../components/Trade";
import WhyUs from "../components/WhyUs";
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
        <Markets />
        <WhyUs />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

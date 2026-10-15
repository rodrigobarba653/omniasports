import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Talent } from "@/components/talent";
import { Opportunities } from "@/components/opportunities";
import { Vision } from "@/components/vision";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Talent />
        <Opportunities />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

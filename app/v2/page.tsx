import { V2Header } from "@/components/v2/header";
import { V2Hero } from "@/components/v2/hero";
import { V2About } from "@/components/v2/about";
import { V2Services } from "@/components/v2/services";
import { V2Talent } from "@/components/v2/talent";
import { V2Ticker } from "@/components/v2/ticker";
import { V2Opportunities } from "@/components/v2/opportunities";
import { V2Vision } from "@/components/v2/vision";
import { V2Contact } from "@/components/v2/contact";
import { V2Footer } from "@/components/v2/footer";

export default function V2Page() {
  return (
    <>
      <V2Header />
      <main>
        <V2Hero />
        <V2About />
        <V2Services />
        <V2Ticker />
        <V2Talent />
        <V2Opportunities />
        <V2Vision />
        <V2Contact />
      </main>
      <V2Footer />
    </>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { QuoteProvider } from "@/components/quote/QuoteContext";
import { Hero } from "@/components/sections/Hero";
import { Indicators } from "@/components/sections/Indicators";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { Applications } from "@/components/sections/Applications";
import { Coverage } from "@/components/sections/Coverage";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <QuoteProvider>
      <Header />
      <main>
        <Hero />
        <Indicators />
        <Products />
        <Benefits />
        <Applications />
        <Coverage />
        <QuoteSection />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </QuoteProvider>
  );
}

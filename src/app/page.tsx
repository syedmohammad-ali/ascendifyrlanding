import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero"
import Features from "@/app/components/features";
import Pricing from "@/app/components/pricing";
import Footer from "./components/footer";
import Mission from "@/app/components/mission";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Mission></Mission>
      <Pricing></Pricing>
      <Footer></Footer>
    </main>
  );
}

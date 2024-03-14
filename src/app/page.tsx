import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero"
import Features from "@/app/components/features";
import Pricing from "@/app/components/pricing";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import About from "@/app/components/about";
import Closing from "@/app/components/closing";
import Blank from "./components/blank";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <About></About>
      <Blank></Blank>
      <Closing></Closing>
      <Blank></Blank>
      <Footer></Footer>

    </main>
  );
}

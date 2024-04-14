import Footer from "@/components/Footer/Footer";
import { Hybridlearning } from "@/components/HybridLearning/Hybridlearning";
import {
  Community,
  HeroSection,
  Instructors,
  Programs,
  Testimonials,
} from "@/components/index";
import { Nutshell } from "@/components/NutshellProgram/Nutshell";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Community />
      <Programs />
      <Nutshell />
      <Hybridlearning />
      <Instructors />
      <Testimonials />
      <Footer />
    </>
  );
}

import Image from "next/image";
import WorkSection from "./components/LandingPage/WorkingSection";
import ProjectsSlider from "./components/ProjectSlider";
import OurClients from "./components/OurClients";
import HeroSection from "./components/LandingPage/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/LandingPage/Services";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <Services />
      <WorkSection />
      <ProjectsSlider />
      <OurClients />
    </div>
  );
}

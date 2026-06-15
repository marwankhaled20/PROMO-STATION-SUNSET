import Image from "next/image";
import Homee from "./components/LandingPage/Homee";
import WorkSection from "./components/LandingPage/WorkingSection";
import ProjectsSlider from "./components/ProjectSlider";
import OurClients from "./components/OurClients";

export default function Home() {
  return (
    <div className="">
      <Homee />
      <WorkSection />
      <ProjectsSlider />
      <OurClients />
    </div>
  );
}

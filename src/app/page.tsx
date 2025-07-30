
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingPageTop from "./components/LandingPageTop";
import MissionAndAbout from "./components/MissionAndAbout";
import ScrollFadeIn from "./components/ScrollFadeIn";
import Services from "./components/Services";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <div className="h-full w-full">
      <LandingPageTop/>
     <MissionAndAbout/>
      <ScrollFadeIn duration={0.9}  delay={0.3}>
     <Services/>
      </ScrollFadeIn>
     <WhatsApp/>
     <Contact/>
     <Footer/>
    </div>
  );
}

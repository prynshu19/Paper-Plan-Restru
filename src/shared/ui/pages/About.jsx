import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";

const About = () => {
  return (
    <div className="overflow-hidden bg-[var(--color-background)]">
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </div>
  );
};

export default About;

import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import OpeningHours from "../components/OpeningHours";

const Contact = () => {
  return (
    <div className="overflow-hidden bg-[var(--color-background)]">
      <ContactHero />
      <ContactInfo />

      <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <ContactForm />
          <OpeningHours />
        </div>
      </section>
    </div>
  );
};

export default Contact;

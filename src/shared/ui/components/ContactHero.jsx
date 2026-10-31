const ContactHero = () => {
  return (
    <section className="px-5 pb-16 pt-20 text-center sm:px-10 lg:px-20 lg:pt-28">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
          GET IN TOUCH
        </span>

        <h1 className="mt-7 font-heading text-5xl leading-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          We'd love to
          <span className="italic text-[var(--color-primary)]">
            {" "}
            hear from you.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
          Have a question, a suggestion, or just want to say hello? We're always
          happy to hear from you.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;

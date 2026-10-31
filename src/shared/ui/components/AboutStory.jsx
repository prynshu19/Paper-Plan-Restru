const AboutStory = () => {
  return (
    <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            A little about us
          </span>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-[var(--color-text)] sm:text-5xl">
            Every great meal begins with a simple idea.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-[var(--color-text-muted)]">
          <p>
            At Paper Plane, we believe food brings people together. A casual
            lunch, a quick bite after a long day, or a meal shared with friends
            — every moment deserves something delicious.
          </p>

          <p>
            Our philosophy is simple: thoughtful food, welcoming experiences,
            and flavours worth coming back for.
          </p>

          <p>
            Whether you're discovering something new or enjoying an old
            favourite, we're glad to have you at our table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

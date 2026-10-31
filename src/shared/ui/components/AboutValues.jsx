const values = [
  {
    number: "01",
    icon: "🥬",
    title: "Fresh Thinking",
    description:
      "We believe that good food starts with thoughtful choices and fresh ideas.",
  },
  {
    number: "02",
    icon: "❤️",
    title: "Made with Care",
    description:
      "Every meal should feel considered, welcoming, and worth enjoying.",
  },
  {
    number: "03",
    icon: "✨",
    title: "Simple Joy",
    description:
      "We celebrate the little moments that make sharing a meal special.",
  },
];

const AboutValues = () => {
  return (
    <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            What matters to us
          </span>

          <h2 className="mt-5 font-heading text-4xl text-[var(--color-text)] sm:text-5xl">
            More than just a meal.
          </h2>

          <p className="mt-5 leading-7 text-[var(--color-text-muted)]">
            The little things behind every good food experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{value.icon}</span>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {value.number}
                </span>
              </div>

              <h3 className="mt-9 font-heading text-2xl text-[var(--color-text)]">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
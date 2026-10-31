import { Link } from "react-router";

const AboutHero = () => {
  return (
    <section className="px-5 pb-20 pt-20 sm:px-10 lg:px-20 lg:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-block rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
            OUR STORY
          </span>

          <h1 className="font-heading text-5xl leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            Good food.
            <br />
            <span className="italic text-[var(--color-primary)]">
              Good feelings.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            We believe great food is about more than what's on your plate. It's
            about the moments, the people, and the little things that make every
            meal memorable.
          </p>

          <Link
            to="/menu"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 font-medium text-white transition hover:opacity-90"
          >
            Explore Our Menu
            <span>↗</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[var(--color-primary)]/40" />

          <img
            src="/About-story.jpeg"
            alt="Freshly prepared restaurant food"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
          />

          <div className="absolute -bottom-6 -left-5 max-w-[210px] rounded-2xl bg-[var(--color-surface-elevated)] p-5 shadow-xl">
            <p className="font-heading text-2xl italic text-[var(--color-primary)]">
              Made with care.
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Served with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

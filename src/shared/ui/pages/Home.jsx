import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="relative isolate px-5 pt-14 pb-28 text-center sm:px-8 sm:pt-16 sm:pb-36">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 size-72 rounded-full border border-[var(--color-tertiary)]/30" />

          <div className="absolute top-10 -right-24 size-80 rounded-full border border-[var(--color-tertiary)]/30" />

          <div className="absolute top-20 left-[8%] text-6xl text-[var(--color-tertiary)]/30">
            ✳
          </div>

          <div className="absolute top-28 right-[10%] text-6xl text-[var(--color-tertiary)]/30">
            ❋
          </div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-[var(--color-primary)] uppercase">
            A Taste of Tradition
          </p>

          <h1 className="font-[var(--font-heading)] text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            A Symphony of
            <br className="hidden sm:block" />
            Authentic Indian Flavors
          </h1>

          <div className="mx-auto mt-4 h-[2px] w-32 bg-[var(--color-primary)]" />

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-[var(--color-text-muted)] sm:text-sm">
            Savor the essence of India with every bite — where bold spices, rich
            flavors, and time-honored recipes come together in perfect harmony.
            A feast for the senses, crafted with authenticity and passion.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold text-[var(--color-on-primary)] shadow-md transition-all hover:-translate-y-1 hover:bg-[var(--color-primary-hover)]"
            >
              Explore Our Menu
            </Link>

            <Link
              to="/menu"
              className="rounded-full border border-[var(--color-primary)] px-6 py-3 text-xs font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* Food Showcase */}
        <div className="relative mx-auto mt-12 max-w-[850px] sm:mt-16">
          <div className="absolute -inset-2 rounded-[30px] border border-[var(--color-primary)]/40 sm:-inset-3" />

          <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border-4 border-[var(--color-surface-elevated)] shadow-2xl">
            <video
              src="../../../../public/hero_video.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <button
              type="button"
              aria-label="Restaurant video preview"
              className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/20 text-2xl text-white backdrop-blur-sm transition-transform hover:scale-110 sm:size-20"
            >
              ▶
            </button>

            <div className="absolute bottom-5 left-5 text-left text-white sm:bottom-7 sm:left-7">
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase">
                Made with tradition
              </p>

              <h2 className="mt-1 font-[var(--font-heading)] text-xl italic sm:text-3xl">
                A journey through Indian cuisine.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Red Section */}
      <section className="relative -mt-20 min-h-52 bg-[var(--color-primary)] sm:-mt-28">
        <div className="absolute -top-14 left-0 h-28 w-full rounded-[50%] bg-[var(--color-primary)]" />

        <div className="relative mx-auto max-w-5xl px-5 pt-16 pb-12 text-center text-white">
          <p className="text-[10px] tracking-[0.25em] uppercase">
            Discover the experience
          </p>

          <h2 className="mt-3 font-[var(--font-heading)] text-3xl sm:text-4xl">
            Good Food. Great Memories.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/80">
            From our kitchen to your table, every dish tells a story of
            authentic flavors and heartfelt hospitality.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

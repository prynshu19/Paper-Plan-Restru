import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import ThemeToggle from "../../../../shared/ui/components/ThemeToggle";

const benefits = [
  {
    icon: "▣",
    title: "Priority Tasting Menu Reservations",
    description:
      "72-hour advance booking window before seasonal seats open publicly.",
  },
  {
    icon: "♙",
    title: "Head Sommelier Cellar Allocations",
    description:
      "First access to rare private barrel finishes and library releases.",
  },
  {
    icon: "♧",
    title: "Chef's Counter Invitations",
    description:
      "Quarterly intimate dining salons hosted directly with Chef Laurent.",
  },
  {
    icon: "〈",
    title: "Bespoke Anniversary Pairings",
    description:
      "Complimentary wine flights for your celebrated personal milestones.",
  },
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { navigate } = useAuth();

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-6 font-[var(--font-body)] text-[var(--color-text)] sm:px-6 sm:py-9 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
        {/* Left: Restaurant Story and Benefits */}
        <aside className="flex flex-col gap-5">
          {/* Restaurant Image */}
          <div className="group relative min-h-[300px] overflow-hidden rounded-md shadow-[var(--shadow-card)] sm:min-h-[390px] lg:min-h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
              alt="Warm restaurant interior and dining tables"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-4 bottom-4 rounded-sm border border-white/30 bg-[#F8F0ED]/95 p-4 text-[#292524] shadow-lg sm:inset-x-5 sm:bottom-5 sm:p-5">
              <p className="mb-1 text-[9px] font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
                Estate & Cellar Experience
              </p>

              <h2 className="font-[var(--font-heading)] text-lg leading-snug italic sm:text-xl">
                "Where culinary craft meets the warmth of an intimate salon."
              </h2>

              <p className="mt-2 text-[10px] leading-relaxed text-[#786963]">
                Curated nightly at Paper Plane · Corner of 4th & Elm
              </p>
            </div>
          </div>

          {/* Membership Benefits */}
          <section className="flex-1 rounded-md border border-[var(--color-border)]/40 bg-[var(--color-surface)] p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] tracking-[0.18em] uppercase text-[var(--color-text-muted)]">
                  Privileges
                </p>

                <h2 className="font-[var(--font-heading)] text-2xl">
                  The Table Society
                </h2>
              </div>

              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                ♜
              </span>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-[var(--color-text-muted)]">
              A membership crafted for patrons who appreciate deliberate
              hospitality, seasonal terroir, and vintage pairings.
            </p>

            <div className="mt-6 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-sm text-[var(--color-primary)]">
                    {benefit.icon}
                  </span>

                  <div>
                    <h3 className="text-xs font-semibold">{benefit.title}</h3>

                    <p className="mt-1 text-[10px] leading-relaxed text-[var(--color-text-muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3 rounded-sm bg-[var(--color-background)] p-3">
              <span className="flex items-center gap-2 text-[10px] font-medium">
                <span className="text-[var(--color-secondary)]">◎</span>
                Complimentary registration
              </span>

              <span className="text-[8px] tracking-wide text-[var(--color-text-muted)] uppercase">
                Tier: Grand Cru
              </span>
            </div>
          </section>
        </aside>

        {/* Right: Registration Form */}
        <section className="flex flex-col justify-center rounded-md border border-[var(--color-border)]/50 bg-[var(--color-surface-elevated)] px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 xl:px-12">
          {/* Heading */}
          <header className="mb-6">
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)]/15 px-3 py-1 text-[9px] font-semibold tracking-wide text-[var(--color-secondary)] uppercase">
                ♜ Patron Enlistment
              </span>
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
            </div>

            <h1 className="mt-3 font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
              Join the Table Society
            </h1>

            <p className="mt-3 max-w-xl text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
              Create your Paper Plane guest account for seamless bookings,
              preferred tables, and bespoke dining experiences.
            </p>
          </header>

          {/* Social Buttons: Visual Only */}
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-sm bg-[var(--color-surface)] px-3 py-3 text-xs font-medium transition-colors hover:bg-[var(--color-border)]"
            >
              <span className="font-bold text-sm text-blue-500">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-sm bg-[var(--color-surface)] px-3 py-3 text-xs font-medium transition-colors hover:bg-[var(--color-border)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-current"
                aria-hidden="true"
              >
                <path d="M16.37 12.08c.02 2.1 1.84 2.8 1.86 2.81-.02.05-.29 1.02-.96 2.03-.58.88-1.18 1.76-2.13 1.78-.93.02-1.23-.57-2.3-.57-1.08 0-1.41.55-2.3.59-.92.04-1.62-.95-2.2-1.83-1.2-1.75-2.12-4.95-.88-7.11.62-1.07 1.72-1.75 2.88-1.77.9-.02 1.75.62 2.3.62.54 0 1.57-.77 2.65-.66.45.02 1.72.18 2.54 1.37-.07.04-1.52.89-1.5 2.74ZM14.7 5.95c.48-.58.81-1.4.72-2.22-.7.03-1.55.47-2.05 1.05-.45.52-.85 1.35-.74 2.15.78.06 1.59-.4 2.07-.98Z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-[9px] tracking-wider text-[var(--color-text-muted)] uppercase">
              Or register with email
            </span>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          {/* Form UI */}
          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            {/* First and Last Name */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-[9px] font-semibold tracking-wide uppercase"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Eleanor"
                  className="w-full rounded-sm border border-transparent bg-[var(--color-surface)] px-3 py-3 text-xs outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-[9px] font-semibold tracking-wide uppercase"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Vance"
                  className="w-full rounded-sm border border-transparent bg-[var(--color-surface)] px-3 py-3 text-xs outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="registerEmail"
                className="mb-2 block text-[9px] font-semibold tracking-wide uppercase"
              >
                Email Address
              </label>

              <div className="flex items-center bg-[var(--color-surface)] focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
                <span className="pl-3 text-xs text-[var(--color-text-muted)]">
                  ✉
                </span>

                <input
                  id="registerEmail"
                  name="email"
                  type="email"
                  placeholder="eleanor.vance@example.com"
                  className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-[var(--color-text-muted)]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="phone"
                  className="text-[9px] font-semibold tracking-wide uppercase"
                >
                  Mobile Phone
                </label>

                <span className="text-[9px] text-[var(--color-text-muted)]">
                  For SMS updates & bookings
                </span>
              </div>

              <div className="flex items-center bg-[var(--color-surface)] focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
                <span className="pl-3 text-xs text-[var(--color-text-muted)]">
                  ♧
                </span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 392-8814"
                  className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-[var(--color-text-muted)]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="registerPassword"
                  className="text-[9px] font-semibold tracking-wide uppercase"
                >
                  Create Password
                </label>

                <span className="text-[9px] text-[var(--color-text-muted)]">
                  Minimum 8 characters
                </span>
              </div>

              <div className="flex items-center bg-[var(--color-surface)] focus-within:ring-1 focus-within:ring-[var(--color-primary)]">
                <span className="pl-3 text-xs text-[var(--color-text-muted)]">
                  ♙
                </span>

                <input
                  id="registerPassword"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter a password"
                  className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-[var(--color-text-muted)]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="px-3 text-[10px] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Email Invitations */}
            <label className="flex cursor-pointer items-start gap-2.5 text-[10px] leading-relaxed text-[var(--color-text-muted)]">
              <input
                type="checkbox"
                defaultChecked
                className="mt-0.5 size-3 shrink-0 accent-[var(--color-primary)]"
              />

              <span>
                Receive private invitations to seasonal tasting menus, cellar
                previews, and winemaker salons.
              </span>
            </label>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-2.5 text-[10px] leading-relaxed text-[var(--color-text-muted)]">
              <input
                type="checkbox"
                className="mt-0.5 size-3 shrink-0 accent-[var(--color-primary)]"
              />

              <span>
                I agree to the Paper Plane{" "}
                <a
                  href="#terms"
                  className="underline underline-offset-2 hover:text-[var(--color-primary)]"
                >
                  Terms of Service
                </a>{" "}
                &{" "}
                <a
                  href="#privacy"
                  className="underline underline-offset-2 hover:text-[var(--color-primary)]"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* Submit: UI Only */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--color-primary)] px-5 py-4 text-[10px] font-bold tracking-wide text-[var(--color-on-primary)] shadow-sm transition-colors hover:bg-[var(--color-primary-hover)] active:scale-[0.99]"
            >
              CREATE GUEST ACCOUNT
              <span className="text-base">→</span>
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-[10px] text-[var(--color-text-muted)]">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="font-medium text-[var(--color-primary)] underline underline-offset-2 cursor-pointer"
            >
              Login In
            </button>
          </p>

          {/* Security Footer */}
          <footer className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[8px] tracking-wide text-[var(--color-text-muted)] uppercase">
            <span>♙ 256-bit SSL encrypted</span>
            <span>⌁ Concierge desk available</span>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Register;

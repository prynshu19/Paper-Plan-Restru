import { useState } from "react";
import { loginHandler, useAuth } from "../../hooks/useAuth";
import ThemeToggle from "../../../../shared/ui/components/ThemeToggle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { navigate, handleSubmit, register, errors } = useAuth();

  return (
    <main className="min-h-screen bg-[var(--color-background)] p-0 font-[var(--font-body)] text-[var(--color-text)] sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1400px] overflow-hidden rounded-none bg-[var(--color-surface-elevated)] shadow-[var(--shadow-card)] sm:rounded-xl lg:grid-cols-[0.82fr_1.18fr]">
        {/* Left Showcase Panel */}
        <aside className="relative flex flex-col justify-between gap-8 bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 xl:p-14">
          {/* Restaurant Logo */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-md bg-white text-2xl shadow-sm">
                🥂
              </div>

              <div>
                <h2 className="font-[var(--font-heading)] text-xl leading-tight">
                  Paper Plane
                </h2>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                  Kitchen & Cellar
                </p>
              </div>
            </div>

            <span className="rounded-full bg-[var(--color-secondary)]/10 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-[var(--color-secondary)] uppercase">
              Guest Table
            </span>
          </div>

          {/* Restaurant Feature */}
          <div className="space-y-5">
            <div className="group relative h-64 overflow-hidden rounded-md shadow-md sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
                alt="Elegant restaurant dining experience"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute right-5 bottom-5 left-5 text-white">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-[#E9B18B] uppercase">
                  No. 14 Tasting Series
                </p>

                <h3 className="max-w-sm font-[var(--font-heading)] text-2xl leading-tight italic sm:text-3xl">
                  Hand-cut pappardelle, braised oxtail & aperitivo pairing.
                </h3>
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-md border border-[var(--color-border)]/60 bg-[var(--color-surface-elevated)] p-5 sm:p-6">
              <div className="mb-3 flex gap-1 text-sm text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>☆</span>
                ))}
              </div>

              <blockquote className="font-[var(--font-heading)] text-lg leading-relaxed italic">
                "Welcome back to your table. Access your tasting reservations,
                sommelier cellar notes, and priority seasonal seatings."
              </blockquote>

              <p className="mt-4 text-[9px] font-semibold tracking-[0.15em] text-[var(--color-text-muted)] uppercase">
                — Concierge & Sommelier Office
              </p>
            </div>
          </div>

          {/* Restaurant Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] text-[var(--color-text-muted)]">
            <span>✓ Cellar Society Verified</span>
            <span>Est. 2018 · San Francisco</span>
          </div>
        </aside>

        {/* Right Login Panel */}
        <section className="flex flex-col justify-center p-6 sm:p-10 lg:px-14 lg:py-12 xl:px-16">
          {/* Form Header */}
          <div className="mb-7">
            <div className="mb-2 flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[var(--color-primary)]" />
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                  Patron Access
                </p>
              </div>
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
            </div>

            <h1 className="font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Sign in to manage reservations, private dining events, and dining
              rewards.
            </p>
          </div>

          {/* Social Login UI */}
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-sm bg-[var(--color-surface)] px-4 py-3 text-xs font-medium transition-colors hover:bg-[var(--color-border)]"
            >
              <span className="font-bold text-base text-blue-500">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-sm bg-[var(--color-surface)] px-4 py-3 text-xs font-medium transition-colors hover:bg-[var(--color-border)]"
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
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-[9px] tracking-wider text-[var(--color-text-muted)] uppercase">
              Or sign in with password
            </span>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          {/* Login Form - UI Only */}
          <form className="space-y-5" onSubmit={handleSubmit(loginHandler)}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-semibold tracking-wide uppercase"
              >
                Email Address or Username
              </label>

              <div className="flex items-center rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors focus-within:border-[var(--color-primary)]">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  id="email"
                  type="text"
                  placeholder="Enter your email or username"
                  className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)]"
                />

                <span className="px-4 text-sm text-[var(--color-text-muted)]">
                  ✉
                </span>
              </div>
            </div>
            {errors?.email && (
              <p className="text-red-600">{errors?.email.message}</p>
            )}

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-[10px] font-semibold tracking-wide uppercase"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-[10px] font-medium text-[var(--color-primary)] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="flex items-center rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors focus-within:border-[var(--color-primary)]">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Use uppercase, lowercase, number and special character",
                    },
                  })}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="px-4 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {errors?.password && (
              <p className="text-red-600">{errors?.password.message}</p>
            )}

            {/* Remember Me */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <input
                  type="checkbox"
                  defaultChecked
                  className="size-3.5 accent-[var(--color-primary)]"
                />
                Remember me on this device
              </label>

              <span className="text-[9px] text-[var(--color-text-muted)]">
                ♙ Secure sign-in
              </span>
            </div>

            {/* Primary Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-sm bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-[var(--color-on-primary)] shadow-sm transition-all hover:bg-[var(--color-primary-hover)] active:scale-[0.99]">
              Enter the Guest Table
              <span aria-hidden="true">→</span>
            </button>
          </form>

          {/* Signup / Access Section */}
          <div className="mt-5 flex flex-col gap-4 rounded-sm bg-[var(--color-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-[var(--font-heading)] text-lg">
                New to Paper Plane?
              </h3>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Join the Table Society for curated cellar releases.
              </p>
            </div>

            <button
              onClick={() => navigate("/register")}
              className="shrink-0 cursor-pointer self-start text-xs font-medium text-[var(--color-primary)] underline underline-offset-4 sm:self-center"
            >
              Register Now
            </button>
          </div>

          {/* Support */}
          <div className="mt-7 text-center">
            <p className="text-xs text-[var(--color-text-muted)]">
              For immediate assistance or dining reservations:
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs">
              <a
                href="tel:+14158904420"
                className="font-medium hover:text-[var(--color-primary)]"
              >
                ☎ (415) 890-4420
              </a>

              <span className="text-[var(--color-tertiary)]">•</span>

              <span className="text-[var(--color-text-muted)]">
                Available Daily 11:00 – 23:00
              </span>
            </div>
          </div>

          {/* Bottom Footer */}
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[10px] text-[var(--color-text-muted)]">
            <span>© Paper Plane Hospitality Group</span>

            <nav className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[var(--color-primary)]">
                Privacy
              </a>
              <a href="#" className="hover:text-[var(--color-primary)]">
                Terms
              </a>
              <a href="#" className="hover:text-[var(--color-primary)]">
                Contact
              </a>
            </nav>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Login;

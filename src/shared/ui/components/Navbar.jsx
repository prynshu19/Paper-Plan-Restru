import { useState } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Cart", path: "/cart" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-xs font-medium transition-colors ${
      isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
    }`;

  return (
    <header className="relative z-30 border-b border-[var(--color-border)]/70 bg-[var(--color-background)]/95">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-md bg-[var(--color-primary)] font-[var(--font-heading)] text-xl font-bold text-white">
            P
          </div>

          <div>
            <h2 className="font-[var(--font-heading)] text-xl leading-none">
              Paper Plane
            </h2>
            <p className="mt-1 text-[8px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
              Kitchen & Cellar
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={navLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Profile and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/profile"
            aria-label="My profile"
            className="flex size-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="size-[18px]"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c0-3.5 3.1-5.5 7-5.5s7 2 7 5.5" />
            </svg>
          </Link>
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center rounded-md border border-[var(--color-border)] md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

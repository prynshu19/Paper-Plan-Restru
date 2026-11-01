import { useMenu } from "../../hooks/useMenu";
import HomeSkeleton from "../../../../shared/ui/components/HomeSkeleton";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  const {
    menuFood,
    isError,
    isPending,
    data,
    page,
    setPage,
    totalPage,
    isFetching,
  } = useMenu();

  if (isPending) return <HomeSkeleton />;

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--color-background)] px-5">
        <p className="text-lg text-[var(--color-text-muted)]">
          Something went wrong. Please try again.
        </p>
      </div>
    );
  }

  console.log(data);

  return (
    <main className="min-h-full bg-[var(--color-background)] px-5 py-12 sm:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <section className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
            Freshly prepared for you
          </span>

          <h1 className="mt-5 font-heading text-4xl leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Explore Our{" "}
            <span className="italic text-[var(--color-primary)]">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            Discover delicious dishes made with carefully selected ingredients.
            Find your next favourite meal.
          </p>
        </section>

        {/* Menu Toolbar */}
        <section className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl text-[var(--color-text)]">
              Our Dishes
            </h2>
          </div>

          {/* Search and Sort UI - functionality can be added later */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Search dishes..."
              className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] sm:w-56"
            />

            <select
              defaultValue="recommended"
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
            >
              <option value="recommended">Recommended</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </section>

        {/* Recipe Grid */}
        {menuFood.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {menuFood.map((recipe) => (
              <MenuCard
                key={recipe.id}
                recipe={recipe}
                isFetching={isFetching}
              />
            ))}
          </section>
        ) : (
          <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] text-center">
            <span className="text-5xl">🍽️</span>
            <h3 className="mt-5 font-heading text-2xl text-[var(--color-text)]">
              No dishes available
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Please check back later for our delicious menu.
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((prev) => prev - 1)}
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text-muted)]"
          >
            ← Previous
          </button>

          <div className="h-10 w-10 rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white flex justify-center items-center">
            {page + 1}
          </div>

          <button
            type="button"
            disabled={page === totalPage - 1}
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-primary-light)]"
          >
            Next →
          </button>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 rounded-3xl bg-[var(--color-primary)] px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            Good food, good mood.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Every dish tells a story. Find yours and make your next meal
            memorable.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Menu;

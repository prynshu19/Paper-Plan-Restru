const MenuCard = ({ recipe, isFetching }) => {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-${isFetching ? 0.3 : 1}`}
    >
      {/* Food Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Cuisine */}
        <span className="absolute left-4 top-4 rounded-full bg-[var(--color-surface-elevated)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] shadow-sm">
          {recipe.cuisine}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-[var(--color-surface-elevated)] px-3 py-1.5 text-sm font-semibold text-[var(--color-text)] shadow-sm">
          <span className="text-amber-500">★</span> {recipe.rating}
          <span className="ml-1 text-xs font-normal text-[var(--color-text-muted)]">
            ({recipe.reviewCount})
          </span>
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Name and Difficulty */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl leading-snug text-[var(--color-text)] sm:text-2xl">
            {recipe.name}
          </h3>

          <span className="shrink-0 rounded-full bg-[var(--color-primary-light)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            {recipe.difficulty}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Recipe Details */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-[var(--color-border)] py-4">
          <div>
            <p className="font-semibold text-[var(--color-text)]">
              {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Total Time
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--color-text)]">
              {recipe.caloriesPerServing}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Calories
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--color-text)]">
              {recipe.servings}
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Servings
            </p>
          </div>
        </div>

        {/* Price and Cart Button */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Price per serving
            </p>
            <p className="font-heading text-2xl font-semibold text-[var(--color-primary)]">
              ₹{recipe.price}
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;

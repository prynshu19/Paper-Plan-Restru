const SkeletonBlock = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded-md bg-[var(--color-border)]/60 ${className}`}
  />
);

const HomeSkeleton = () => {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--color-background)]">
      {/* Navbar Skeleton */}
      <header className="border-b border-[var(--color-border)]/50">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <SkeletonBlock className="size-9 rounded-md" />

            <div className="space-y-2">
              <SkeletonBlock className="h-4 w-28" />
              <SkeletonBlock className="h-2 w-20" />
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {[1, 2, 3, 4].map((item) => (
              <SkeletonBlock key={item} className="h-3 w-14" />
            ))}
          </div>

          {/* Profile */}
          <SkeletonBlock className="size-9 rounded-full" />
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="px-5 pt-14 pb-28 text-center sm:px-8 sm:pt-16 sm:pb-36">
        {/* Eyebrow */}
        <SkeletonBlock className="mx-auto mb-5 h-3 w-32" />

        {/* Heading */}
        <div className="mx-auto max-w-2xl space-y-3">
          <SkeletonBlock className="mx-auto h-9 w-[85%] sm:h-12" />
          <SkeletonBlock className="mx-auto h-9 w-[65%] sm:h-12" />
        </div>

        {/* Description */}
        <div className="mx-auto mt-6 max-w-xl space-y-2">
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="mx-auto h-3 w-[85%]" />
        </div>

        {/* CTA Buttons */}
        <div className="mt-7 flex justify-center gap-3">
          <SkeletonBlock className="h-11 w-36 rounded-full" />
          <SkeletonBlock className="h-11 w-32 rounded-full" />
        </div>

        {/* Food Image */}
        <div className="relative mx-auto mt-12 max-w-[850px] sm:mt-16">
          <div className="absolute -inset-2 rounded-[30px] border border-[var(--color-primary)]/20" />

          <SkeletonBlock className="aspect-[16/9] w-full rounded-2xl" />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative -mt-20 min-h-52 bg-[var(--color-primary)]/20 sm:-mt-28">
        <div className="mx-auto max-w-5xl space-y-4 px-5 pt-20 pb-12">
          <SkeletonBlock className="mx-auto h-3 w-32" />
          <SkeletonBlock className="mx-auto h-8 w-72 max-w-full" />
          <SkeletonBlock className="mx-auto h-3 w-full max-w-md" />
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;

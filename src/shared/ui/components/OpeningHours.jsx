const hours = [
  { day: "Monday - Friday", time: "11:00 AM - 10:00 PM" },
  { day: "Saturday", time: "11:00 AM - 11:00 PM" },
  { day: "Sunday", time: "12:00 PM - 10:00 PM" },
];

const OpeningHours = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="overflow-hidden rounded-3xl bg-[var(--color-surface)]">
        <div className="p-8 sm:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            When to visit
          </span>

          <h2 className="mt-4 font-heading text-4xl text-[var(--color-text)]">
            Opening Hours
          </h2>

          <div className="mt-8 space-y-5">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex flex-wrap justify-between gap-3 border-b border-[var(--color-border)] pb-4"
              >
                <span className="font-medium text-[var(--color-text)]">
                  {item.day}
                </span>

                <span className="text-sm text-[var(--color-text-muted)]">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--color-primary)] px-8 py-7 text-white sm:px-10">
          <p className="font-heading text-2xl italic">
            Good food is always worth the wait.
          </p>

          <p className="mt-2 text-sm text-white/80">
            We look forward to welcoming you.
          </p>
        </div>
      </div>

      <div className="flex min-h-52 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
        <div>
          <span className="text-4xl">📍</span>
          <h3 className="mt-4 font-heading text-2xl text-[var(--color-text)]">
            Find Our Location
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Add your restaurant's Google Maps embed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;

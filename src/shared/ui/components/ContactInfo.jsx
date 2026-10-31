const contactDetails = [
  {
    icon: "📍",
    title: "Visit Us",
    description: "Come by and enjoy a meal with us.",
    value: "Your Restaurant Address",
  },
  {
    icon: "📞",
    title: "Call Us",
    description: "We're happy to help with your queries.",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: "✉️",
    title: "Email Us",
    description: "Drop us a message anytime.",
    value: "hello@paperplane.com",
  },
];

const ContactInfo = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {contactDetails.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-3xl">{item.icon}</span>

            <h2 className="mt-6 font-heading text-2xl text-[var(--color-text)]">
              {item.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              {item.description}
            </p>

            <p className="mt-5 break-words font-medium text-[var(--color-primary)]">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
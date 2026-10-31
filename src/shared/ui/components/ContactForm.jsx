import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data:", data);

    // Later: connect this to your backend/API.
    reset();
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]";

  return (
    <div>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        Send us a message
      </span>

      <h2 className="mt-4 font-heading text-4xl text-[var(--color-text)]">
        Let's start a conversation.
      </h2>

      <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
        Fill out the form below and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Your Name
            </label>

            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className={inputClass}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Email Address
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="you@example.com"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
            Subject
          </label>

          <select
            {...register("subject", { required: "Select a subject" })}
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="general">General Enquiry</option>
            <option value="order">Order Related</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>

          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
            Your Message
          </label>

          <textarea
            rows={5}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must contain at least 10 characters",
              },
            })}
            placeholder="Tell us what's on your mind..."
            className={`${inputClass} resize-none`}
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-white transition hover:opacity-90"
        >
          Send Message
          <span>↗</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

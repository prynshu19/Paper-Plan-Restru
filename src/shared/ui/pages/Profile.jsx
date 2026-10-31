import { useState } from "react";

const user = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 29,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  ip: "42.48.100.32",
  macAddress: "47:fa:41:18:ec:eb",
  university: "University of Wisconsin--Madison",
};

const InfoItem = ({ label, value }) => (
  <div className="min-w-0">
    <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
    <p className="mt-1 break-words font-medium text-[var(--color-text)]">
      {value}
    </p>
  </div>
);

const Section = ({ title, children }) => (
  <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 sm:p-8">
    <h2 className="font-heading text-2xl text-[var(--color-text)]">{title}</h2>
    <div className="mt-7 grid gap-6 sm:grid-cols-2">{children}</div>
  </section>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const formattedDate = new Date(user.birthDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-full bg-[var(--color-background)] px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-9">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Account
          </p>
          <h1 className="mt-2 font-heading text-4xl text-[var(--color-text)] sm:text-5xl">
            My Profile
          </h1>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile header */}
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
          <div className="h-36 bg-[var(--color-primary-light)] sm:h-48" />

          <div className="relative px-6 pb-8 sm:px-9">
            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="h-28 w-28 rounded-3xl border-4 border-[var(--color-surface-elevated)] bg-[var(--color-surface)] object-cover sm:h-32 sm:w-32"
              />

              <div className="flex-1 pb-1">
                <h2 className="font-heading text-3xl text-[var(--color-text)]">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="mt-1 text-[var(--color-text-muted)]">
                  @{user.username}
                </p>
              </div>

              <span className="w-fit rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium capitalize text-[var(--color-primary)]">
                {user.gender}
              </span>
            </div>

            <div className="mt-8 grid gap-5 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3">
              <InfoItem label="User ID" value={`#${user.id}`} />
              <InfoItem label="Age" value={`${user.age} years`} />
              <InfoItem label="Date of Birth" value={formattedDate} />
            </div>
          </div>
        </div>

        {/* Profile navigation */}
        <div className="mt-9 flex gap-7 overflow-x-auto border-b border-[var(--color-border)]">
          {[
            { id: "personal", label: "Personal Information" },
            { id: "contact", label: "Contact Details" },
            { id: "additional", label: "Additional Details" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Information sections */}
        <div className="mt-7">
          {activeTab === "personal" && (
            <Section title="Personal Information">
              <InfoItem label="First Name" value={user.firstName} />
              <InfoItem label="Last Name" value={user.lastName} />
              <InfoItem label="Maiden Name" value={user.maidenName} />
              <InfoItem label="Username" value={`@${user.username}`} />
              <InfoItem label="Age" value={`${user.age} years`} />
              <InfoItem label="Gender" value={user.gender} />
              <InfoItem label="Date of Birth" value={formattedDate} />
            </Section>
          )}

          {activeTab === "contact" && (
            <Section title="Contact Information">
              <InfoItem label="Email Address" value={user.email} />
              <InfoItem label="Phone Number" value={user.phone} />
            </Section>
          )}

          {activeTab === "additional" && (
            <div className="space-y-6">
              <Section title="Physical Information">
                <InfoItem label="Blood Group" value={user.bloodGroup} />
                <InfoItem label="Height" value={`${user.height} cm`} />
                <InfoItem label="Weight" value={`${user.weight} kg`} />
                <InfoItem label="Eye Color" value={user.eyeColor} />
              </Section>

              <Section title="Education">
                <InfoItem label="University" value={user.university} />
              </Section>

              <Section title="Technical Information">
                <InfoItem label="IP Address" value={user.ip} />
                <InfoItem label="MAC Address" value={user.macAddress} />
              </Section>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
          Profile ID: {user.id} · Static demo profile
        </p>
      </div>
    </main>
  );
};

export default Profile;

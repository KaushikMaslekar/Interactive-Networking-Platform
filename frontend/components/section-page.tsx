import Link from "next/link";

type SectionPageProps = {
  primaryActionHref?: string;
  primaryActionLabel?: string;
  secondaryActionHref?: string;
  secondaryActionLabel?: string;
  title: string;
  eyebrow: string;
  description: string;
};

export function SectionPage({
  title,
  eyebrow,
  description,
  primaryActionHref = "/dashboard",
  primaryActionLabel = "Open dashboard",
  secondaryActionHref = "/",
  secondaryActionLabel = "Back to home",
}: SectionPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryActionHref}
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {primaryActionLabel}
            </Link>
            <Link
              href={secondaryActionHref}
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
            >
              {secondaryActionLabel}
            </Link>
          </div>
        </section>

        <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            Foundation notes
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
            <li>Each section will later hold interactive learning content.</li>
            <li>
              All pages share the same dark engineering-style visual system.
            </li>
            <li>
              The shell is route-driven so future features can expand cleanly.
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

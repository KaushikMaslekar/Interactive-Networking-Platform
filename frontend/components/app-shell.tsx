import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Labs", href: "/labs" },
  { label: "Tools", href: "/tools" },
  { label: "Quiz", href: "/quiz" },
  { label: "Interview", href: "/interview" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Search", href: "/search" },
];

const highlights = [
  {
    label: "Simulation-first",
    value:
      "Packet journeys, protocol flows, and event timelines built for visual learning.",
  },
  {
    label: "Tool-rich",
    value:
      "Subnet calculators, DNS helpers, packet breakdowns, and future lab utilities.",
  },
  {
    label: "Progress-aware",
    value:
      "Lessons, quizzes, bookmarks, streaks, and roadmap checkpoints live in one place.",
  },
];

const featuredTracks = [
  {
    title: "Networking fundamentals",
    description:
      "Start with the language of networking: topologies, bandwidth, latency, and packet flow.",
    tag: "Learn",
  },
  {
    title: "Packet-level intuition",
    description:
      "Watch headers, payloads, and protocols move through a reusable simulation engine.",
    tag: "Simulate",
  },
  {
    title: "Hands-on practice",
    description:
      "Use browser labs to configure interfaces, routes, VLANs, and connectivity tests.",
    tag: "Lab",
  },
];

const quickActions = [
  { label: "Start learning", href: "/learn" },
  { label: "Open labs", href: "/labs" },
  { label: "Review roadmap", href: "/roadmap" },
  { label: "Search topics", href: "/search" },
];

export function AppShell() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-6 py-6">
        <aside className="w-72 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-950/20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              Interactive Networking Platform
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white">
              Engineering-grade learning shell
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A visual, simulation-first platform for learning computer
              networking.
            </p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
              Phase 2 focus
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Turn the foundation into a real product surface: landing content,
              learning entry points, and clear navigation.
            </p>
          </div>
        </aside>

        <section className="flex-1 space-y-6">
          <header className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/10">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
                Phase 2
              </span>
              <span>Home experience</span>
            </div>

            <div className="mt-6 grid gap-8 xl:grid-cols-[1.4fr_0.8fr] xl:items-center">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Learn networking like a professional uses an engineering tool,
                  not a static website.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  Explore topics, run simulations, practice labs, and track your
                  progress in one dark, focused workspace built for visual
                  learning.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-900"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  Today&apos;s focus
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Current track</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      OSI Model and packet flow
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Recommended next</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Open Learn and start Fundamentals
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
                    This phase is about making the product feel alive,
                    navigable, and worth returning to.
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">
                  {item.label}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.3fr_0.95fr]">
            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                    Featured learning paths
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Choose a path and keep moving
                  </h3>
                </div>
                <Link
                  href="/roadmap"
                  className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  View roadmap
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {featuredTracks.map((track) => (
                  <article
                    key={track.title}
                    className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/30"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">
                      {track.tag}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold text-white">
                      {track.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {track.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Home structure
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                What the home page should feel like
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <li>Immediate clarity about what the platform offers.</li>
                <li>Fast paths into learning, labs, search, and progress.</li>
                <li>Visual hierarchy that feels like a technical workspace.</li>
                <li>Enough depth to support future content without clutter.</li>
              </ul>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Quick stats
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {[
                  { label: "Learning modes", value: "Visual + hands-on" },
                  { label: "Focus area", value: "Computer networking" },
                  { label: "Release style", value: "Phase-by-phase" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Coming next
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Phase 2 will expand into the Learn entry point
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                After the home experience is set, the next step is to give the
                Learn section a strong curriculum shell and topic hierarchy so
                users can move from the landing page into actual learning
                content.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

import { projects } from "@/data/content";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        WHAT I&apos;VE BUILT
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects?.map((p) => (
          <div
            key={p?.title}
            className="bg-panel border border-line rounded-2xl p-6 hover:border-cyan hover:-translate-y-1 transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{ backgroundColor: `${p.color}20`, color: p.color }}
            >
              {p.icon}
            </div>
            <h3 className="text-base font-medium mb-2">{p.title}</h3>
            <p className="text-dim text-sm leading-relaxed mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/25"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2.5">
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  className="text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-blue to-cyan text-[#001018] font-semibold"
                >
                  Live demo
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  className="text-xs px-4 py-2 rounded-lg border border-line hover:border-cyan hover:text-cyan transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

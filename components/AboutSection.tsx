import { about } from "@/data/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        GET TO KNOW ME
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        About
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center text-center md:text-left">
        <div
          className="w-[200px] h-[200px] rounded-full mx-auto flex items-center justify-center text-6xl border-2 border-cyan shadow-glow"
          style={{
            background: "radial-gradient(circle at 35% 30%, #1c2a4a, #050816)",
          }}
        >
          🧑‍💻
        </div>
        <div>
          <div className="text-2xl font-bold mb-1.5">
            Hi, I&apos;m <span className="text-cyan">{about.name}</span>
          </div>
          <div className="text-dim text-xs tracking-[1px] mb-4">
            {about.role}
          </div>
          <p className="text-dim text-sm leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            {about.bio}
          </p>
          <div className="flex gap-8 flex-wrap justify-center md:justify-start">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-orbitron text-xl text-cyan font-bold">
                  {s.num}
                </div>
                <div className="text-[11px] text-dim tracking-[1px]">
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

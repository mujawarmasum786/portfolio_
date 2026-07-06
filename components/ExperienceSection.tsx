import { experience } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        JOURNEY SO FAR
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Experience
      </h2>
      <div className="relative pl-8 border-l-2 border-line">
        {experience.map((e, i) => (
          <div
            key={e.year}
            className={
              i !== experience.length - 1 ? "pb-9 relative" : "relative"
            }
          >
            <div className="absolute -left-[41px] top-0.5 w-3.5 h-3.5 rounded-full bg-cyan shadow-glow" />
            <div className="font-orbitron text-cyan text-xs tracking-[2px] mb-1">
              {e.year}
            </div>
            <div className="text-xl font-medium mb-1.5">{e.company}</div>
            <div className="text-base font-medium mb-1.5">{e.role}</div>
            <div className="text-base font-medium mb-1.5">{e.location}</div>
            {e?.award && (
              <div className=" text-sm leading-relaxed">
                Awards : <span className="text-dim">{e?.award}</span>
              </div>
            )}
            <div className="text-dim text-sm leading-relaxed">
              {e.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

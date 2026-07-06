import { education } from "@/data/content";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        LEARNING JOURNEY
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Education
      </h2>
      <div className="relative pl-8 border-l-2 border-line">
        {education.map((e, i) => (
          <div
            key={e.year}
            className={
              i !== education.length - 1 ? "pb-9 relative" : "relative"
            }
          >
            <div className="absolute -left-[41px] top-0.5 w-3.5 h-3.5 rounded-full bg-cyan shadow-glow" />
            <div className="font-orbitron text-cyan text-xs tracking-[2px] mb-1">
              {e.year}
            </div>
            <div className="text-xl font-medium mb-1.5">{e.college}</div>
            <div className="text-base font-medium mb-1.5">{e.std}</div>
            {/* <div className="text-base font-medium mb-1.5">{e.location}</div>
            <div className="text-dim text-sm leading-relaxed">
              {e.description}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

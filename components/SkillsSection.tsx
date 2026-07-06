import { skillCategories, levelColors } from "@/data/content";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        TOOLKIT
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="flex flex-col items-center gap-9">
        <div className="w-15 h-15 w-[60px] h-[60px] rounded-full bg-panel border-2 border-cyan flex items-center justify-center text-xl shadow-glow">
          💻
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center gap-3.5">
              <div
                className="w-13 h-13 w-[52px] h-[52px] rounded-full flex items-center justify-center text-lg border-[1.5px]"
                style={{ borderColor: cat.color, color: cat.color }}
              >
                {cat.icon}
              </div>
              <div className="font-orbitron text-xs tracking-[1px] text-dim">
                {cat.label.toUpperCase()}
              </div>
              <div className="flex gap-2.5 flex-wrap justify-center max-w-[180px]">
                {cat.items.map((item) => (
                  <div className="flex flex-col" key={item.name}>
                    <div
                      title={item.name}
                      className="w-10 h-10 rounded-lg bg-panel border border-line flex items-center justify-center text-sm relative"
                    >
                      {item.short}
                      <span
                        className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-[1.5px] border-bg"
                        style={{ backgroundColor: levelColors[item.level] }}
                      />
                    </div>
                    <div className="text-[8px] text-center">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-5 flex-wrap text-[11px] text-dim">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: levelColors.beginner }}
            />
            Beginner
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: levelColors.intermediate }}
            />
            Intermediate
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: levelColors.advanced }}
            />
            Advanced
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: levelColors.expert }}
            />
            Expert
          </span>
        </div>
      </div>
    </section>
  );
}

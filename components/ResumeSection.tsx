export default function ResumeSection() {
  return (
    <section id="resume" className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        TAKE IT WITH YOU
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Resume
      </h2>
      <div className="flex items-center justify-between gap-6 bg-panel border border-line rounded-[20px] p-9 flex-wrap">
        <div>
          <h3 className="text-base font-medium mb-2">Download my resume</h3>
          <p className="text-dim text-sm">
            Get a copy of my resume in PDF format.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue to-cyan text-[#001018] font-semibold text-sm"
        >
          ⬇ Download resume
        </a>
        <div
          className="w-[90px] h-[110px] rounded-lg border-2 border-cyan shadow-glow flex items-center justify-center font-orbitron text-cyan text-xs tracking-[1px]"
          style={{
            background: "linear-gradient(160deg, #10193a, #050816)",
          }}
        >
          PDF
        </div>
      </div>
    </section>
  );
}

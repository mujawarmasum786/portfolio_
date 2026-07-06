import { features } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-16 pb-10 px-6 text-center border-t border-line">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-3xl mx-auto mb-8 text-dim text-sm">
        {features.map((f) => (
          <div key={f}>
            <span className="text-cyan mr-1.5">◈</span>
            {f}
          </div>
        ))}
      </div>
      <div className="text-dim text-xs tracking-[1px]">
        © 2026 Masum Mujawar — Built with Next.js, D3.js and Tailwind CSS
      </div>
    </footer>
  );
}

"use client";

const links = [
  { id: "universe", label: "Universe" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-bg/75 backdrop-blur-md border-b border-line">
      <div className="font-orbitron text-sm font-bold tracking-[2px]">
        Masum <span className="text-cyan">Mujawar</span>
      </div>
      <div className="hidden md:flex gap-6 text-xs tracking-[1px] text-dim">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className="hover:text-cyan transition-colors"
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

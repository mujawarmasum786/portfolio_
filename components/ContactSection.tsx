"use client";

import { contact } from "@/data/content";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="text-cyan text-xs tracking-[4px] text-center mb-2">
        LET&apos;S TALK
      </div>
      <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
        Contact
      </h2>
      <div className="flex justify-center gap-8">
        <div>
          {[
            { icon: "✉", label: "EMAIL", value: contact.email },
            // { icon: "⌥", label: "GITHUB", value: contact.github },
            { icon: "in", label: "LINKEDIN", value: contact.linkedin },
            { icon: "📍", label: "LOCATION", value: contact.location },
          ].map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3.5 py-4 border-b border-line"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan/10 text-cyan flex items-center justify-center text-base flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <div className="text-[11px] text-dim tracking-[1px]">
                  {c.label}
                </div>
                <div className="text-sm">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-3 mb-3.5 bg-panel border border-line rounded-lg text-sm focus:outline-none focus:border-cyan"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-3 mb-3.5 bg-panel border border-line rounded-lg text-sm focus:outline-none focus:border-cyan"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-3 mb-3.5 bg-panel border border-line rounded-lg text-sm focus:outline-none focus:border-cyan resize-y"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue to-cyan text-[#001018] font-semibold text-sm"
          >
            Send message
          </button>
        </form> */}
      </div>
    </section>
  );
}

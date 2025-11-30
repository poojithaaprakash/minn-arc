// components/CustomOrderForm.tsx
"use client";

import { useState } from "react";

const MAX_MESSAGE_LENGTH = 800;

export default function CustomOrderForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [idea, setIdea] = useState("");
  const [colors, setColors] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      name && `Name: ${name}`,
      contact && `Contact: ${contact}`,
      budget && `Budget (approx): ${budget}`,
      preferredDate && `Needed by: ${preferredDate}`,
      colors && `Colour preferences: ${colors}`,
      idea && `Idea / description:\n${idea}`,
    ].filter(Boolean);

    const text = lines.join("\n");

    // Open Instagram DM with pre-filled text (user can still attach images there)
    const encoded = encodeURIComponent(text);
    const url = `https://ig.me/m/${igHandle}?message=${encoded}`;
    window.open(url, "_blank");
  };

  const charsLeft = MAX_MESSAGE_LENGTH - idea.length;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-accent/60 bg-white/90 px-4 sm:px-8 py-6 sm:py-8 shadow-sm space-y-5 text-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
            Contact
          </label>
          <input
            type="text"
            className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white"
            placeholder="Instagram handle or email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
            Budget (optional)
          </label>
          <input
            type="text"
            className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white"
            placeholder="e.g. ₹800 – ₹1200"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
            Needed by (optional)
          </label>
          <input
            type="text"
            className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white"
            placeholder="e.g. 25 Dec or 2 weeks from now"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
          Colour preferences (optional)
        </label>
        <input
          type="text"
          className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white"
          placeholder="e.g. lavender, cream, muted tones"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 text-xs font-medium text-text-secondary uppercase tracking-[0.16em]">
          Idea / reference description
        </label>
        <textarea
          className="w-full border border-brand-accent/70 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary text-sm bg-white min-h-[140px]"
          placeholder="Describe what you’d like (type of item, size, colours, any reference picture you’ll send on Instagram, etc.)"
          value={idea}
          maxLength={MAX_MESSAGE_LENGTH}
          onChange={(e) => setIdea(e.target.value)}
        />
        <div className="mt-1 text-[11px] text-text-secondary text-right">
          {charsLeft} characters left
        </div>
      </div>

      <p className="text-[11px] text-text-secondary">
        When you tap “Open Instagram DM”, this information will be copied into a message so you can review it and attach reference images before sending.
      </p>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5A3964] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-secondary shadow-sm hover:shadow-md transition-all"
      >
        Open Instagram DM
      </button>
    </form>
  );
}

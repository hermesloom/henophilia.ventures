"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the email subject and body
    const emailSubject = encodeURIComponent(
      `Henophilia Ventures: Inquiry from ${name}`
    );
    const emailBody = encodeURIComponent(message);

    // Open the mailto link
    window.location.href = `mailto:info@henophilia.ventures?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-neutral-800 text-white rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
      >
        Send Message
      </button>
    </form>
  );
}

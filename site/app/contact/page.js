"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <main className="min-h-screen py-20 bg-[#1f3a60] text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white text-[#1f3a60] p-6 rounded-2xl shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-xl hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>

      {status === "SUCCESS" && (
        <p className="mt-4 text-green-400">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "ERROR" && (
        <p className="mt-4 text-red-400">Oops! Something went wrong.</p>
      )}
    </main>
  );
}

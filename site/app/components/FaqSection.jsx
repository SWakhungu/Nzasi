"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is AfyaNumeriq?",
    answer:
      "AfyaNumeriq is a digital Governance, Risk, and Compliance (GRC) platform designed primarily for healthcare organizations. It helps providers implement, manage, and continuously improve compliance with ISO standards in a structured, auditable way.",
  },
  {
    question: "Who is AfyaNumeriq built for?",
    answer:
      "AfyaNumeriq is built for hospitals, clinics, laboratories, health startups, and healthcare groups that need to meet regulatory, accreditation, and ISO requirements without relying on spreadsheets, emails, or disconnected documents.",
  },
  {
    question: "Which standards does AfyaNumeriq support?",
    answer: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>ISO 7101 — Healthcare Quality Management Systems (integrated fully)</li>
          <li>ISO/IEC 27001 — Information Security (integrated fully)</li>
          <li>ISO 15189 — Medical laboratories (future)</li>
          <li>ISO/IEC 42001 — AI management systems (future)</li>
          <li>ISO 13485 — Medical devices (future)</li>
          <li>ISO/IEC 17025 — Testing & calibration laboratories (future)</li>
        </ul>
      </>
    ),
  },
  {
    question: "How is AfyaNumeriq different from hiring consultants?",
    answer:
      "Consultants help you prepare for audits. AfyaNumeriq becomes your living compliance system. Instead of static documents, say for ISO/IEC 27001, it links Assets → Risks → Controls → Evidence → Statement of Applicability → Audit readiness, keeping compliance continuously current.",
  },
  {
    question:
      "Can AfyaNumeriq generate a real Statement of Applicability (SoA) for ISO 27001?",
    answer:
      "Yes. AfyaNumeriq automatically generates a live, auditor-ready Statement of Applicability based on actual assets, risks, controls, and risk treatment decisions.",
  },
  {
    question: "Does AfyaNumeriq support audits?",
    answer:
      "Yes. AfyaNumeriq is designed around how auditors think. You can produce a live SoA (ISO 27001), documented risk treatment decisions, and compliance scores and trends for any standard, making audits faster and far less disruptive. Internal audits can also be scheduled and managed inside the platform.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most organizations can be onboarded in days (3 to 4), not months. Core risk, audit, and compliance (required and auditable clauses) modules are seeded and aligned to accommodate how your organization actually operates.",
  },
  {
    question: "Is AfyaNumeriq secure?",
    answer:
      "Yes. AfyaNumeriq is built around strong access control, audit logs, encryption, backups, and role-based permissions. Security is core to the platform architecture.",
  },
  {
    question: "Can AfyaNumeriq grow with my organization?",
    answer:
      "Yes. AfyaNumeriq scales from a single clinic to multi-site healthcare groups, supporting more users, standards, and compliance complexity over time.",
  },
  {
    question: "How do I see AfyaNumeriq in action?",
    answer:
      "You can request a live demo where we walk you through real ISO workflows and show how risks, controls, evidence, and compliance metrics are managed inside AfyaNumeriq.",
  },
  {
    question:
      "We are not a healthcare organization; can AfyaNumeriq still help us?",
    answer:
      "Yes. While several supported standards are healthcare-focused, ISO/IEC 27001 and ISO/IEC 42001 apply across industries including finance, education, government contractors, and technology organizations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      className="py-20 bg-gradient-to-r from-[#edf3f6] to-[#f7f9fb] text-[#1f3a60] w-full"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#85b6d6] rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold"
              >
                <span>{faq.question}</span>
                <span className="text-[#3582b8]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-[#1f3a60]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

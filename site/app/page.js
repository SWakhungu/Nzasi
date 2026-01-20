"use client";

import { useState } from "react";
import DemoRequestModal from "./components/DemoRequestModal";
import ThankYouModal from "./components/ThankYouModal";
import Navbar from "./components/Navbar";
import FaqSection from "./components/FaqSection";   

export default function Home() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  return (
    <>
      <Navbar onRequestDemo={() => setShowDemoModal(true)} />
      {showDemoModal && (
        <DemoRequestModal
          onClose={() => setShowDemoModal(false)}
          onSubmitted={() => {
            setShowDemoModal(false);
            setShowThankYouModal(true);
          }}
        />
      )}
      {showThankYouModal && (
        <ThankYouModal onClose={() => setShowThankYouModal(false)} />
      )}

      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-[#1f3a60] to-[#2a4b7c]">
          {/* Hero content - Left side */}
          <div className="relative z-10 px-6 md:px-12 flex-1 flex flex-col justify-center items-start text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AfyaNumeriq GRC by Nzasi Ventures
            </h1>

            <p className="text-xl md:text-2xl mb-8">
              Governance, Risk &amp; Compliance for Healthcare
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#solution"
                className="px-6 py-3 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-2xl shadow hover:bg-yellow-400 transition"
              >
                Explore Our Solution
              </a>
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-6 py-3 bg-white text-[#1f3a60] font-semibold rounded-2xl shadow hover:bg-gray-200 transition"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Hero image - Right side */}
          <div className="hidden lg:flex flex-1 justify-center items-center pr-6 md:pr-12">
            <img
              src="/isms-dashboard.png"
              alt="ISMS Dashboard Overview"
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white text-[#1f3a60] w-full">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6">
              Nzasi Ventures Limited is a Nairobi-based company building{" "}
              <span className="font-semibold">AfyaNumeriq</span>, a Governance,
              Risk, and Compliance (GRC) platform designed for healthcare
              organizations.
            </p>
            <p className="text-lg mb-6">
              Our mission is to empower healthcare service providers by
              simplifying ISO standards compliance and enabling safer, more
              reliable services.
            </p>
            <ul className="text-left space-y-2 max-w-xl mx-auto list-disc list-inside">
              <li>
                Focused on ISO 7101:2023 (healthcare quality management systems)
              </li>
              <li>
                Built to scale to ISO 15189, ISO/IEC 27001, ISO/IEC 42001, ISO
                13485, ISO/IEC 17025
              </li>
              <li>
                Driven by innovation and collaboration with trusted partners
              </li>
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section
          id="solution"
          className="py-20 bg-gradient-to-r from-[#edf3f6] to-[#d6e9f5] text-[#1f3a60] w-full"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Solution
            </h2>
            <p className="text-lg mb-6">
              AfyaNumeriq is a Governance, Risk, and Compliance (GRC) platform
              designed specifically for healthcare organizations. It helps
              providers comply with{" "}
              <span className="font-semibold">ISO 7101:2023</span> standard
              while preparing them to scale into additional standards that are
              critical for healthcare, laboratories, and information security.
            </p>
            <p className="text-lg mb-6">
              As your organization grows, AfyaNumeriq will support extensions
              for:
            </p>
            <ul className="text-left space-y-2 max-w-xl mx-auto list-disc list-inside">
              <li>ISO 15189:2022 — Medical laboratories QMS</li>
              <li>ISO/IEC 27001:2022 — Information security management</li>
              <li>ISO/IEC 42001:2023 — AI management system</li>
              <li>ISO 13485:2016 — Medical devices QMS</li>
              <li>
                ISO/IEC 17025:2017 — Testing and calibration labs competency
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1f3a60] text-white font-semibold rounded-2xl shadow hover:bg-[#274a78] transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <FaqSection />

        {/* Partnership Section */}
        <section
          id="partnership"
          className="py-20 bg-white text-[#1f3a60] w-full"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership</h2>
            <p className="text-lg mb-6">
              We are inviting partners and investors to join us in scaling{" "}
              <span className="font-semibold">AfyaNumeriq</span>, our GRC
              platform for healthcare organizations.
            </p>
            <p className="text-lg mb-6">
              By partnering with Nzasi Ventures, you’ll help shape the future of
              healthcare governance, compliance, and risk management.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
              <li className="p-4 border rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold mb-2">Funding</h3>
                <p className="text-sm">
                  Support the growth of AfyaNumeriq into a full-scale platform.
                </p>
              </li>
              <li className="p-4 border rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold mb-2">Technology Collaboration</h3>
                <p className="text-sm">
                  Contribute expertise in health tech, data, or security
                  solutions.
                </p>
              </li>
              <li className="p-4 border rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold mb-2">Pilot Programs</h3>
                <p className="text-sm">
                  Partner with us to test AfyaNumeriq in real-world healthcare
                  settings.
                </p>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1f3a60] text-white font-semibold rounded-2xl shadow hover:bg-[#274a78] transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section
          id="resources"
          className="py-20 bg-gradient-to-r from-[#f7f9fb] to-[#e9f2f7] text-[#1f3a60] w-full"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Resources</h2>
            <p className="text-lg mb-6">
              At Nzasi Ventures, we believe knowledge and compliance go hand in
              hand. We are working with{" "}
              <a
                href="https://www.egis.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3582b8] font-semibold hover:underline"
              >
                Egis Management Systems Limited
              </a>{" "}
              to provide training and consultancy resources that support ISO
              standards adoption in healthcare and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 border rounded-lg shadow hover:shadow-md transition text-left">
                <h3 className="font-semibold mb-2">ISO Standards Training</h3>
                <p className="text-sm">
                  Access practical training to help your team understand and
                  implement healthcare ISO standards effectively.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow hover:shadow-md transition text-left">
                <h3 className="font-semibold mb-2">Consultancy Support</h3>
                <p className="text-sm">
                  Work with Egis experts to streamline your ISO standards
                  implementation journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4 text-[#f7cf59]">
              Pricing
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Tiered subscription pricing, based on organization size and compliance complexity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lite */}
              <div className="bg-[#1f3a60] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">AfyaNumeriq Lite</h3>
                <p className="text-[#f7cf59] text-xl font-semibold mb-6">
                  $3,000 / year
                </p>
                <ul className="text-left space-y-3 text-gray-200">
                  <li>• A single ISO standard</li>
                  <li>• Asset–Risk–Control workflow</li>
                  <li>• Risk register & treatments</li>
                  <li>• Compliance score dashboard</li>
                  <li>• Manual evidence uploads</li>
                  <li>• Up to 5 users</li>
                  <li>• Single site</li>
                </ul>
              </div>

              {/* Professional */}
              <div className="bg-[#3582b8] rounded-xl p-8 shadow-xl scale-105">
                <h3 className="text-2xl font-bold mb-2">AfyaNumeriq Professional</h3>
                <p className="text-[#f7cf59] text-xl font-semibold mb-6">
                  $8,000 / year
                </p>
                <ul className="text-left space-y-3 text-white">
                  <li>• Multiple ISO standards</li>
                  <li>• Automated SoA generation</li>
                  <li>• Audit-ready reporting</li>
                  <li>• Risk ownership tracking</li>
                  <li>• Evidence traceability</li>
                  <li>• Compliance trends</li>
                  <li>• Up to 15 users</li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="bg-[#1f3a60] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">AfyaNumeriq Enterprise</h3>
                <p className="text-[#f7cf59] text-xl font-semibold mb-6">
                  $20,000+ / year
                </p>
                <ul className="text-left space-y-3 text-gray-200">
                  <li>• Multi-site & group support</li>
                  <li>• Custom ISO frameworks</li>
                  <li>• Advanced audit workflows</li>
                  <li>• Role-based access controls</li>
                  <li>• Extended audit logs</li>
                  <li>• Dedicated onboarding</li>
                  <li>• SLA & roadmap input</li>
                </ul>
              </div>
              </div>
            </div>
          </section>
        


        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#1f3a60] text-white w-full">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-6">
              Ready to collaborate or learn more about AfyaNumeriq? We’d love to
              hear from you.
            </p>
            <div className="space-y-4">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@nzasi.com"
                  className="underline hover:text-[#f7cf59]"
                >
                  info@nzasi.com
                </a>
              </p>
              <p>Phone: +254 781 704 966</p>
            </div>
            <div className="mt-10">
              <a
                href="mailto:info@nzasi.com"
                className="px-6 py-3 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-2xl shadow hover:bg-yellow-400 transition"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

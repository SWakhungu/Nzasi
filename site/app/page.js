export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#1f3a60] to-[#3582b8] text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Company name / logo */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Nzasi Ventures</h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl mb-8">
        Governance, Risk &amp; Compliance for Healthcare
      </p>

      {/* CTA button */}
      <a
        href="#solution"
        className="px-6 py-3 bg-[#f7cf59] text-[#1f3a60] font-semibold rounded-2xl shadow hover:bg-yellow-400 transition"
      >
        Explore Our Solution
      </a>
    </main>
  );
}

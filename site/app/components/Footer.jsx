"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1f3a60] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Company Info */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-3">Nzasi Ventures</h3>
          <p className="text-sm leading-relaxed">
            Governance, Risk &amp; Compliance for Healthcare.
            <br />
            Nairobi, Kenya
          </p>
        </div>

        {/* Right: Quick Links */}
        <div className="md:w-1/2 md:text-right">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#f7cf59] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-use"
                className="hover:text-[#f7cf59] transition"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/cookie-notice"
                className="hover:text-[#f7cf59] transition"
              >
                Cookie Notice
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © {year} Nzasi Ventures Limited by Steve Wakhungu. All rights reserved.
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1f3a60] text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nzasi Ventures Limited. All rights
          reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a href="/privacy-policy" className="hover:text-[#f7cf59] transition">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="hover:text-[#f7cf59] transition">
            Terms of Use
          </a>
          <a href="/cookie-notice" className="hover:text-[#f7cf59] transition">
            Cookie Notice
          </a>
        </div>
      </div>
    </footer>
  );
}

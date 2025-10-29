export default function CookieNotice() {
  return (
    <main className="min-h-screen p-10 max-w-3xl mx-auto text-[#d2e0f4]">
      <h1 className="text-3xl font-bold mb-6">Cookie Notice</h1>
      <p className="mb-4">
        Our website uses cookies to improve user experience and analyze web
        traffic. Cookies are small text files stored on your device.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Types of Cookies We Use
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Essential cookies for basic site functionality</li>
        <li>Analytics cookies to understand visitor behavior</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Managing Cookies</h2>
      <p className="mb-4">
        You can manage or disable cookies through your browser settings. Note
        that some features may not function properly if cookies are disabled.
      </p>
      <p className="mt-8 text-sm text-gray-600">Effective: October 2025</p>
    </main>
  );
}
